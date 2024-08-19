import Table from '@/components/table';
import PATH from '@/routes/paths';
import { ListEmployees } from '@/services/employeeService';
import { employeeColums } from '@/utils/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { swrKeys } from '@/utils/constants';
import useSWR from 'swr';

const Employees = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);

  const { data, isLoading } = useSWR(
    `${swrKeys.EMPLOYEES}-${page}`,
    () => ListEmployees({ limit: 10, page }),
    {
      keepPreviousData: true,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );

  return (
    <section className="p-2 overflow-hidden h-full">
      <Table
        btnLabel="Add Employee"
        setPage={setPage}
        page={page}
        data={data}
        rowsPerPage={10}
        isLoading={isLoading}
        columns={employeeColums}
        onClick={() => navigate(PATH.addEmployees)}
      />
    </section>
  );
};

export default Employees;
