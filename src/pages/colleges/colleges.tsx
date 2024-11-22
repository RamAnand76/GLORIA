import Table from '@/components/table';
import PATH from '@/routes/paths';
import {
  DeleteCollege,
  ListColleges,
  ListCourses,
} from '@/services/collegeService';
import useStore from '@/store/store';
import { collegeColums, swrKeys } from '@/utils/constants';
import { notify } from '@/utils/helpers/helpers';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import Modals from '../../modals';

const Colleges: React.FC = () => {
  const {
    userDetails: { is_admin },
  } = useStore((state) => state);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [collegeName, setCollegeName] = useState<string>('');
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<
    {
      label: string;
      iterables: TOption[];
    }[]
  >();
  const [selectedFilter, setSelectedFilter] = useState<{
    [key: string]: string[];
  }>({});

  /********************************STORE************************************** */
  const { selectedRowIds, setSelectedRowIds } = useStore((state) => state);

  /********************************SERVICE CALLS************************************** */
  const { data, isLoading, mutate } = useSWR(
    `${swrKeys.COLLEGES}-${page}`,
    () => {
      return ListColleges({
        college: collegeName,
        course: selectedFilter?.Courses?.join(),
      });
    },
    {
      keepPreviousData: true,
      revalidateIfStale: false,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  useEffect(() => {
    mutate();
  }, [collegeName]);

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

  const {} = useSWR(
    `${swrKeys.COURSES}`,
    async () => {
      const resp = await ListCourses();
      setFilterOptions(() => [
        {
          label: 'Courses',
          iterables: resp?.map((v: string) => ({ label: v, value: v })),
        },
      ]);
    },
    {
      keepPreviousData: true,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );
  /********************************CUSTOM METHODS************************************** */

  const handleStudentActions = (action: string, rowData: ICollege) => {
    if (action === 'edit' && is_admin) {
      navigate(`edit-college/${rowData.id}`);
    } else if (action === 'delete') {
      setSelectedRowIds([rowData.id]);
      setShowDeleteModal(true);
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

  console.log(selectedFilter);

  return (
    <Fragment>
      <section className="h-full overflow-hidden p-2 slideIn">
        {/* @ts-ignore */}
        <Table
          btnLabel="Add College"
          rows={data?.results}
          colums={collegeColums}
          currentPage={page}
          showingLimit={10}
          isLoading={isLoading}
          totalCount={data?.count}
          setCurrentPage={setPage}
          handleApplyButton={() => mutate()}
          onBtnClick={() => navigate(PATH.addColleges)}
          isBtnDisabled={!is_admin}
          showFilter={true}
          handleRowAction={handleStudentActions}
          checkboxSelection={true}
          showEditBtn={is_admin}
          showDeleteBtn={is_admin}
          showEyeBtn={false}
          isSearchable={true}
          searchValue={collegeName}
          setSearchValue={setCollegeName}
          accOptions={filterOptions}
          //@ts-ignore
          selectedItems={selectedFilter}
          //@ts-ignore
          setSelectedItems={handleFilterSelection}
          reset={() => {
            //@ts-ignore
            setSelectedFilter([]);
            mutate();
          }}
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
