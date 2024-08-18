import GetIcons from '@/assets/icons';
import Button from '@/components/button';
import ButtonComp from '@/components/button/button';
import CheckBox from '@/components/checkbox/checkbox';
import Input from '@/components/input';
import { Register } from '@/services/employeeService';
import { notify } from '@/utils/helpers/helpers';
import { NewEmployeeSchema } from '@/utils/validationSchemas';
import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';

/**
 * @namespace {AddEmployee}
 * @description renders add employee form
 * @returns {React.JSX.Element}
 */
const AddEmployee: React.FC = (): React.JSX.Element => {
  const [file, setFile] = useState<File | undefined>(undefined);

  /**
   * @function handleEmployeeRegister
   * @description submit form
   * @param values
   */
  const handleEmployeeRegister = async (
    values: IRegister,
    actions: FormikHelpers<IRegister>
  ) => {
    Register(values).then((resp) => {
      notify(resp.message, { type: 'success' });
      actions.resetForm();
    });
  };
  return (
    <div className="h-full w-full flex flex-col gap-4 rounded-lg bg-white p-2">
      <div className="p-3 flex items-center gap-4 bg-slate-300 rounded-md">
        <p className={file?.name && 'text-primary'}>
          {file
            ? file.name
            : 'Multiple Employees can be added through a Excel file(.xlsx).'}
        </p>
        {file && (
          <Button
            label="Upload"
            startContent={GetIcons('upload')}
            color="success"
          />
        )}
        <label
          htmlFor="bulk_upload"
          className="bg-primary-800 font-medium p-2 border-1 rounded-lg cursor-pointer ml-auto text-white"
        >
          {file ? 'Change' : 'Select'} File
        </label>

        <input
          type="file"
          id="bulk_upload"
          className="hidden"
          accept=".csv,.xls,.xlsx"
          onChange={(e) => setFile(e?.target?.files?.[0])}
        />
      </div>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          is_admin: false,
          is_employee: true,
        }}
        onSubmit={handleEmployeeRegister}
        validationSchema={NewEmployeeSchema}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          resetForm,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="grid md:grid-cols-2 grid-col-1 gap-4 gap-y-8 p-4"
            onSubmit={handleSubmit}
          >
            <Input
              label="First Name*"
              name="first_name"
              placeholder="First Name"
              labelPlacement="outside"
              isInvalid={touched.first_name && !!errors.first_name}
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              label="Last Name*"
              name="last_name"
              placeholder="Last Name"
              labelPlacement="outside"
              isInvalid={touched.last_name && !!errors.last_name}
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              label="Email*"
              name="email"
              labelPlacement="outside"
              placeholder="Email"
              isInvalid={touched.email && !!errors.email}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              label="Phone Number*"
              name="phone_number"
              placeholder="Phone Number"
              labelPlacement="outside"
              isInvalid={touched.phone_number && !!errors.phone_number}
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <CheckBox checked={values.is_admin}>Make Admin</CheckBox>
            <div className="flex items-center gap-3 col-span-2">
              <Button
                label="Discard"
                color="danger"
                type="button"
                onClick={() => resetForm()}
              />
              <Button
                label="Submit"
                color="success"
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddEmployee;
