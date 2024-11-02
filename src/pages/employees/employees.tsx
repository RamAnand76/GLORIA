import Table from '@/components/table';
import PATH from '@/routes/paths';
import { DeleteEmployee, ListEmployees } from '@/services/employeeService';
import { colorMapping, employeeColums, swrKeys } from '@/utils/constants';
import { notify } from '@/utils/helpers/helpers';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import Modals from '../../modals';
const Employees = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<IEmployee>();
  const [isDLoading, setIsDLoading] = useState<boolean>(false);

  const { data, isLoading, mutate } = useSWR(
    `${swrKeys.EMPLOYEES}-${page}`,
    () => ListEmployees({ limit: 10, page }),
    {
      keepPreviousData: true,
      revalidateIfStale: false,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  const handleEmployeeDelete = () => {
    setIsDLoading(true);
    //@ts-ignore
    DeleteEmployee(selectedRow?.id)
      .then((value) => {
        notify(value.message, { type: 'success' });
        setShowDeleteModal(false);
        mutate();
      })
      .finally(() => setIsDLoading(false));
  };

  /********************************CUSTOM METHODS************************************** */

  const handleRowActions = (action: string, rowData: IEmployee) => {
    const { id, username, ...rest } = rowData;
    setSelectedRow(rowData);
    if (action === 'edit') {
      localStorage.setItem('emp', JSON.stringify(rest));
      navigate(`edit-employee/${id}`);
    } else if (action === 'delete') {
      setShowDeleteModal(true);
    }
  };

  return (
    <section className="h-full overflow-hidden p-2 slideIn">
      {/* @ts-ignore */}
      <Table
        btnLabel="Add Employee"
        rows={data?.results}
        colums={employeeColums}
        currentPage={page}
        showingLimit={10}
        isLoading={isLoading}
        totalCount={data?.count}
        setCurrentPage={setPage}
        onBtnClick={() => navigate(PATH.addEmployees)}
        colorMapping={colorMapping}
        showFilter={false}
        checkboxSelection={true}
        showEyeBtn={false}
        handleRowAction={handleRowActions}
      />
      <Modals.ConfirmationModal
        isOpen={showDeleteModal}
        setOpen={setShowDeleteModal}
        isSubmitting={isDLoading}
        content="Are sure to delete employee"
        title="Delete Employee"
        onSubmit={handleEmployeeDelete}
      />
    </section>
  );
};

export default Employees;
