import React from 'react';
import Button from '@/components/button';
import Input from '@/components/input';
export interface TableHeaderProps {
  btnLabel: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ btnLabel, ...rest }) => {
  return (
    <div className="bg-white rounded-[14px] p-2 flex items-center justify-between ">
      <Input placeholder="Search Here" className="w-auto md:w-60 h-10" />
      <Button label={btnLabel} color="primary" {...rest} />
    </div>
  );
};

export default TableHeader;
