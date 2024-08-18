import Table from '@/components/table';
import PATH from '@/routes/paths';
import { ListEmployees } from '@/services/employeeService';
import { employeeColums } from '@/utils/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employees = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const fetchEmployees = () => {
    return ListEmployees({ limit: 10, page });
  };
  return (
    <section className="p-2 overflow-hidden h-full">
      <Table
        btnLabel="Add Employee"
        setPage={setPage}
        page={page}
        fetcher={fetchEmployees}
        columns={employeeColums}
        onClick={() => navigate(PATH.addEmployees)}
      />
    </section>
  );
};

export default Employees;
