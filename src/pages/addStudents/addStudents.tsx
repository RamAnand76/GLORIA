import GetIcons from '@/assets/icons';
import Button from '@/components/button';
import CheckBox from '@/components/checkbox';
import Menu from '@/components/dropdown';
import Input from '@/components/input';
import { BulkRegister, Register } from '@/services/employeeService';
import useStore from '@/store/store';
import { paymentModeOptions } from '@/utils/constants';
import { notify } from '@/utils/helpers/helpers';
import { NewEmployeeSchema } from '@/utils/validationSchemas';
import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';

/**
 * @namespace {AddEmployee}
 * @description renders add employee form
 * @returns {React.JSX.Element}
 */
const AddStudents: React.FC = (): React.JSX.Element => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [uploadingFile, setUploadingFile] = useState<boolean>(false);
  const { bulkRegisterData, setBulkRegisterData } = useStore((state) => state);

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

  const handleBulkRegister = async () => {
    setUploadingFile(true);
    const formData = new FormData();
    file && formData.append('file', file);
    BulkRegister(formData)
      .then((resp) => setBulkRegisterData(resp))
      .finally(() => setUploadingFile(false));
  };

  const handleAction = () => console.log();

  return (
    <div className="flex size-full flex-col gap-4 rounded-lg bg-white p-2">
      <div className="rounded-md bg-slate-300 p-3">
        <div className="flex items-center gap-4">
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
              onClick={handleBulkRegister}
              isLoading={uploadingFile}
            />
          )}
          <label
            htmlFor="bulk_upload"
            className="ml-auto cursor-pointer rounded-lg border-1 bg-primary-800 p-2 font-medium text-white"
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
        {bulkRegisterData?.download_link && (
          <div className="mt-2 rounded-md border border-black p-2 text-xs font-medium text-red-700">
            <span>
              {bulkRegisterData.successful_registrations} Employees added
              successfully and {bulkRegisterData.failed_registrations} failed
            </span>
            <p className="mt-1 flex items-center gap-1 italic">
              {GetIcons('info')}{' '}
              <a
                href={bulkRegisterData.download_link}
                target="_blank"
                className="hover:underline"
              >
                Click here {''}
              </a>
              for the registered employee details. NOTE: Link will only be
              available till next bulk registration.
            </p>
          </div>
        )}
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
            className="grid grid-cols-1 gap-4 gap-y-8 p-4 md:grid-cols-2"
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
            <Menu
              title="Admin"
              showLabel={true}
              label="Mode of Payment"
              options={paymentModeOptions}
              onSelectItem={handleAction}
            />
            <CheckBox checked={values.is_admin}>Make Admin</CheckBox>
            <div className="col-span-2 flex items-center gap-3">
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

export default AddStudents;
