import GetIcons from '@/assets/icons';
import Button from '@/components/button';
import CheckBox from '@/components/checkbox/checkbox';
import Menu from '@/components/dropdown';
import Input from '@/components/input';
import {
  BulkRegister,
  EditEmployee,
  Register,
} from '@/services/employeeService';
import useStore from '@/store/store';
import { workModeOptions } from '@/utils/constants';
import { notify } from '@/utils/helpers/helpers';
import { NewEmployeeSchema } from '@/utils/validationSchemas';
import { Formik, FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * @namespace {AddEmployee}
 * @description renders add employee form
 * @returns {React.JSX.Element}
 */
const AddEmployee: React.FC = (): React.JSX.Element => {
  const params = useParams();

  const [file, setFile] = useState<File | undefined>(undefined);
  const [uploadingFile, setUploadingFile] = useState<boolean>(false);
  const { bulkRegisterData, setBulkRegisterData } = useStore((state) => state);
  const [initialValues, setInitialValues] = useState<IRegister>({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    is_admin: false,
    is_employee: true,
    work_location: '',
  });

  useEffect(() => {
    if (params?.id) {
      setInitialValues(JSON.parse(localStorage.getItem('emp') ?? `{}`));
    }
    return () => localStorage.removeItem('emp');
  }, []);

  /**
   * @function handleEmployeeRegister
   * @description submit form
   * @param values
   */
  const handleEmployeeRegister = async (
    values: IRegister,
    actions: FormikHelpers<IRegister>
  ) => {
    if (params?.id) {
      EditEmployee(params?.id, values).then((resp) => {
        notify(resp.message, { type: 'success' });
        actions.resetForm();
      });
    } else {
      Register(values).then((resp) => {
        notify(resp.message, { type: 'success' });
        actions.resetForm();
      });
    }
  };

  const handleBulkRegister = async () => {
    setUploadingFile(true);
    const formData = new FormData();
    file && formData.append('file', file);
    BulkRegister(formData)
      .then((resp) => setBulkRegisterData(resp))
      .finally(() => setUploadingFile(false));
  };

  return (
    <div className="h-full w-full flex flex-col gap-4 rounded-lg bg-white p-2 slideIn">
      <div className="bg-slate-300 p-3 rounded-md">
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
        {bulkRegisterData?.download_link && (
          <div className="p-2 rounded-md border border-black text-xs font-medium mt-2 text-red-700">
            <span>
              {bulkRegisterData.successful_registrations} Employees added
              successfully and {bulkRegisterData.failed_registrations} failed
            </span>
            <p className="flex items-center italic gap-1 mt-1">
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
        initialValues={initialValues}
        onSubmit={handleEmployeeRegister}
        validationSchema={NewEmployeeSchema}
        enableReinitialize
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
          setFieldValue,
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
            <Menu
              label={'Work Location'}
              options={workModeOptions}
              onSelectItem={({ value }) =>
                setFieldValue('work_location', value)
              }
              menuClass="w-full"
              isSelectable={true}
              selectedItem={
                workModeOptions.find(
                  (options: { value: any }) =>
                    options.value === values?.work_location
                )?.label
              }
            />
            <CheckBox
              isSelected={values.is_admin}
              className="self-end mb-1"
              onChange={(e) => setFieldValue('is_admin', e.target.checked)}
            >
              Make Admin
            </CheckBox>
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
