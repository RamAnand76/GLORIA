import Table from '@/components/table';
import { DeleteCollege, ListColleges } from '@/services/collegeService';
import useStore from '@/store/store';
import { collegeColums, swrKeys } from '@/utils/constants';
import React, { Fragment, useMemo, useState } from 'react';
import useSWR from 'swr';
import Modals from '../../modals';
import { notify } from '@/utils/helpers/helpers';
import PATH from '@/routes/paths';
import { useNavigate } from 'react-router-dom';

const Colleges: React.FC = () => {
  const {
    userDetails: { id, is_admin },
  } = useStore((state) => state);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  /********************************STORE************************************** */
  const { selectedRowIds, setSelectedRowIds } = useStore((state) => state);

  /********************************SERVICE CALLS************************************** */
  const { data, isLoading, mutate } = useSWR(
    `${swrKeys.COLLEGES}-${page}`,
    () => ListColleges(),
    {
      keepPreviousData: true,
      revalidateIfStale: false,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  const handleCollegeDelete = () => {
    DeleteCollege(selectedRowIds)
      .then((data) => {
        notify(data.message, { type: 'success' });
      })
      .finally(() => {
        setShowDeleteModal(false);
        mutate();
      });
  };

  /********************************CUSTOM METHODS************************************** */

  const handleStudentActions = (action: string, rowData: ICollege) => {
    if (action === 'edit' && is_admin) {
      navigate(`edit-college/${rowData.id}`);
    } else if (action === 'delete') {
      setSelectedRowIds([rowData.id]);
      setShowDeleteModal(true);
    }
  };

  const isRowActionDisabled = useMemo(
    //@ts-ignore
    () => (_data?: ICollege, action: 'edit' | 'delete' | 'view') => {
      return ['edit', 'delete'].includes(action) ? !is_admin : false;
    },
    [is_admin]
  );

  return (
    <Fragment>
      <section className="h-full overflow-hidden p-2 slideIn">
        <Table
          btnLabel="Add College"
          rows={data?.results}
          colums={collegeColums}
          currentPage={page}
          showingLimit={10}
          isLoading={isLoading}
          totalCount={data?.count}
          // accOptions={studentFilterOptions}
          setCurrentPage={setPage}
          // selectedItems={selectedFilter}
          // setSelectedItems={handleFilterSelection}
          handleApplyButton={() => mutate()}
          // reset={() => setSelectedFilter([])}
          onBtnClick={() => navigate(PATH.addColleges)}
          isBtnDisabled={!is_admin}
          showFilter={false}
          handleRowAction={handleStudentActions}
          checkboxSelection={true}
          // showActions={!!selectedRowIds.length}
          // handleHeaderAction={handleHeaderActions}
          isRowActionDisabled={isRowActionDisabled}
          // onRowClick={onRowClick}
          showEyeBtn={false}
        />
      </section>
      <Modals.ConfirmationModal
        isOpen={showDeleteModal}
        setOpen={setShowDeleteModal}
        content="Are sure to delete college(s)"
        title="Delete Students"
        onSubmit={handleCollegeDelete}
      />
    </Fragment>
  );
};

export default Colleges;
