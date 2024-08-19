import Table from '@/components/table';
import PATH from '@/routes/paths';
import { ListStudents } from '@/services/studentService';
import { studentColums, swrKeys } from '@/utils/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const Employees = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);

  const { data, isLoading } = useSWR(
    `${swrKeys.STUDENTS}-${page}`,
    () => ListStudents({ limit: 10, page }),
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
        btnLabel="Add Student"
        setPage={setPage}
        page={page}
        data={data}
        rowsPerPage={10}
        isLoading={isLoading}
        columns={studentColums}
        // onClick={() => navigate(PATH.addEmployees)}
      />
    </section>
  );
};

export default Employees;
