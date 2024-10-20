import Table from '@/components/table';
import PATH from '@/routes/paths';
import { ListEmployees } from '@/services/employeeService';
import { colorMapping, employeeColums, swrKeys } from '@/utils/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

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
      />
    </section>
  );
};

export default Employees;
