import Table from '@/components/table';
import PATH from '@/routes/paths';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const rows = [
  {
    key: '1',
    name: 'Tony Reichert',
    role: 'CEO',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Zoey Lang',
    role: 'Technical Lead',
    status: 'Paused',
  },
  {
    key: '3',
    name: 'Jane Fisher',
    role: 'Senior Developer',
    status: 'Active',
  },
  {
    key: '4',
    name: 'William Howard',
    role: 'Community Manager',
    status: 'Vacation',
  },
];
const Employees = () => {
  const navigate = useNavigate();
  return (
    <section className="p-2">
      <Table
        dataRows={{ results: rows, count: rows.length }}
        btnLabel="Add Employee"
        onClick={() => navigate(PATH.addEmployees)}
      />
    </section>
  );
};

export default Employees;
