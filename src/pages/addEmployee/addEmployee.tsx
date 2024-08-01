import Button from '@/components/button';
import Input from '@/components/input';
import React from 'react';

const AddEmployee: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 rounded-lg bg-white p-2">
      <div className="p-3 flex items-center gap-4 bg-slate-300 rounded-md">
        <p> Multiple Employees can be added through CSV/Excel.</p>
        <label
          htmlFor="bulk_upload"
          className="bg-primary-800 font-semibold p-2 border-1 rounded-lg cursor-pointer text-white"
        >
          Upload File
        </label>
        <input
          type="file"
          id="bulk_upload"
          className="hidden"
          accept=".csv,.xls,.xlsx"
        />
      </div>
      <form className="grid md:grid-cols-2 grid-col-1 gap-4 gap-y-6 p-4">
        <Input
          label="First Name*"
          placeholder="First Name"
          labelPlacement="outside"
          errorMessage="error"
          isInvalid={true}
        />
        <Input
          label="Last Name*"
          placeholder="Last Name"
          labelPlacement="outside"
          errorMessage="error"
        />
        <Input
          label="Email*"
          labelPlacement="outside"
          placeholder="Email"
          errorMessage="error"
        />
        <Input
          label="Phone Number*"
          placeholder="Phone Number"
          labelPlacement="outside"
          errorMessage="error"
          isInvalid={true}
        />
        <div className="flex items-center gap-3">
          <Button label="Discard" color="danger" />
          <Button label="Submit" color="success" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
