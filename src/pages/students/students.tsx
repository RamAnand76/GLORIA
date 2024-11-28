import Table from '@/components/table';
import PATH from '@/routes/paths';
import { deleteStudents, downloadStudentPdf, ListStudents } from '@/services/studentService';
import useStore from '@/store/store';
import {
  colorMapping,
  studentColums,
  studentFilterOptions,
  swrKeys,
} from '@/utils/constants';
import { notify } from '@/utils/helpers/helpers';
import { Fragment, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import Modals from '../../modals';

const Students = () => {
  const navigate = useNavigate();
  const {
    userDetails: { id, is_admin },
  } = useStore((state) => state);
  /********************************STORE************************************** */
  const { selectedRowIds } = useStore((state) => state);

  /******************************** REACT-HOOKS ************************************** */

  const [page, setPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showAdmitStudentModal, setShowAdmitStudentModal] =
    useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<IStudent>();
  const [isDltLoading, setIsDltLoading] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<{
    [key: string]: string[];
  }>({});

  /********************************SERVICE CALLS************************************** */
  const { data, isLoading, mutate } = useSWR(
    `${swrKeys.STUDENTS}-${page}`,
    () =>
      ListStudents({
        limit: 10,
        page,
        //@ts-ignore
        type: selectedFilter['Admission Status'] || 'all',
        //@ts-ignore
        id: is_admin ? '' : id,
        //@ts-ignore
        student_status: selectedFilter['Student Status'] || '',
      }),
    {
      keepPreviousData: true,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );

  const handleHeaderActions = (action: TOption) => {
    if (action.value === 'delete') {
      if (confirm("Only students with status 'Not accepted' will be deleted")) {
        deleteStudents({
          student_ids: Object.keys(selectedRowIds).flatMap(
            // @ts-ignore
            (item) => selectedRowIds[item]
          ),
        }).then((data) => {
          notify(data.message, { type: 'success' });
        });
      }
    }
  };

  const handleStudentDelete = () => {
    setIsDltLoading(true);
    //@ts-ignore
    deleteStudents({ student_ids: [selectedRow?.id] })
      .then((value) => notify(value, { type: 'success' }))
      .finally(() => setIsDltLoading(false));
  };
  

  /********************************CUSTOM METHODS************************************** */

  const handleStudentActions = (action: string, rowData: IStudent) => {
    setSelectedRow(rowData);
    if (action === 'edit') {
      setShowAdmitStudentModal(true);
    } else if (action === 'delete') {
      setShowDeleteModal(true);
    } else if (action === 'download') {  // Add this part for PDF download
      handleDownloadPdf(rowData.id);
    }
  };

  const handleDownloadPdf = async (studentId: string) => {
    try {
      const pdfData = await downloadStudentPdf(studentId); // Call the API function
      const url = window.URL.createObjectURL(new Blob([pdfData]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Student_${studentId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Failed to download PDF', error);
    }
  };

  const handleFilterSelection = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => {
    setSelectedFilter((cv) => {
      return {
        ...cv,
        [label]: [value],
      };
    });
  };

  const isRowEditDisabled = useMemo(
    () => (_data?: IStudent, action?: 'edit' | 'delete' | 'view' | 'download') => {
      return action === 'edit' ? is_admin : false;
    },
    [is_admin]
  );

  const onRowClick = ({ id, is_admitted }: IStudent) => {
    navigate(`edit-student/${id}`, { state: { id, is_admitted } });
  };

  const handleFilterApply = () => {
    page === 1 ? mutate(true) : setPage(1);
  };

  const showActions = useMemo(() => {
    return Object.keys(selectedRowIds)?.some(
      //@ts-ignore
      (key) => selectedRowIds[key]?.length > 0
    );
  }, [page, selectedRowIds]);

  return (
    <Fragment>
      <section className="h-full overflow-hidden p-2 slideIn">
        <Table
          btnLabel="Add Students"
          rows={data?.results}
          colums={studentColums}
          currentPage={page}
          showingLimit={10}
          isLoading={isLoading}
          totalCount={data?.count}
          accOptions={studentFilterOptions}
          setCurrentPage={setPage}
          //@ts-ignore
          selectedItems={selectedFilter}
          //@ts-ignore
          setSelectedItems={handleFilterSelection}
          handleApplyButton={handleFilterApply}
          reset={() => {
            //@ts-ignore
            setSelectedFilter([]);
          }}
          onBtnClick={() => navigate(PATH.addStudents)}
          isBtnDisabled={!is_admin}
          colorMapping={colorMapping}
          showFilter={true}
          handleRowAction={handleStudentActions}
          checkboxSelection={true}
          showEyeBtn={false}
          showActions={showActions}
          handleHeaderAction={handleHeaderActions}
          isRowActionDisabled={isRowEditDisabled}
          onRowClick={onRowClick}
        />
      </section>
      <Modals.AdmitStudentConfirmation
        isOpen={showAdmitStudentModal}
        //@ts-ignore
        admittedState={{ id: selectedRow?.id, state: selectedRow?.is_admitted }}
        setIsOpen={setShowAdmitStudentModal}
        //@ts-ignore
        setAdmittedState={setSelectedRow}
      />
      <Modals.ConfirmationModal
        isOpen={showDeleteModal}
        setOpen={setShowDeleteModal}
        isSubmitting={isDltLoading}
        content="Are sure to delete student?"
        title="Delete Student"
        onSubmit={handleStudentDelete}
      />
    </Fragment>
  );
};

export default Students;
