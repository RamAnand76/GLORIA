import Table from '@/components/table';
import { ListStudents } from '@/services/studentService';
import { studentColums, swrKeys } from '@/utils/constants';
import React from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import PATH from '@/routes/paths';

const Employees = () => {
  const [page, setPage] = React.useState(1);
  const navigate = useNavigate();

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
    <section className="h-full overflow-hidden p-2">
      <Table
        btnLabel="Add Student"
        setPage={setPage}
        page={page}
        data={data}
        rowsPerPage={10}
        isLoading={isLoading}
        columns={studentColums}
        onClick={() => navigate(PATH.addStudents)}
      />
    </section>
  );
};

export default Employees;
