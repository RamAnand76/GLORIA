import GetIcons from '@/assets/icons';
import AsyncSelect from '@/components/asyncSelect';
import Button from '@/components/button';
import Menu from '@/components/dropdown';
import Input from '@/components/input';
import TextArea from '@/components/textArea';
import { ListEmployeeNames } from '@/services/employeeService';
import { updateStudent, ViewStudentDetails } from '@/services/studentService';
import useStore from '@/store/store';
import {
  adminEditableFields,
  basicInfo,
  docFields,
  employeeRestrictedFields,
  mapDropDownOptions,
  swrKeys,
} from '@/utils/constants';
import { notify } from '@/utils/helpers/helpers';
import { FieldArray, Formik, FormikHelpers } from 'formik';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
//@ts-ignore
interface InitialValueTypes extends IStudent {
  student_response?: string[];
}
/**
 * @namespace {EditStudent}
 * @description renders student details form
 * @returns {React.JSX.Element}
 */
const EditStudent: React.FC = (): React.JSX.Element => {
  const location = useLocation();
  const {
    userDetails: { is_admin },
  } = useStore((state) => state);

  /*******************************REACT-HOOKS********************************************* */
  const isFieldDisabled = useMemo(
    () => (field: string) => {
      return is_admin
        ? !adminEditableFields?.includes(field)
        : employeeRestrictedFields?.includes(field);
    },
    []
  );

  /*******************************SERVICES********************************************* */
  /**
   * @function handleEmployeeRegister
   * @description submit form
   * @param values
   */
  const handleEmployeeRegister = (
    values: InitialValueTypes,
    action: FormikHelpers<InitialValueTypes>
  ) => {
    const formData = new FormData();
    const authorizedFields = is_admin
      ? Object.keys(values).filter((val) => adminEditableFields.includes(val))
      : Object.keys(values).filter(
          (val) => !employeeRestrictedFields.includes(val)
        );

    authorizedFields.forEach((field) => {
      if (field === 'student_response') {
        const formated = values[field]?.reduce(
          (acc, item: string, index: number) => {
            acc = { ...acc, [`call_${index}`]: item };
            return acc;
          },
          {}
        );

        formData.set('student_response', JSON.stringify(formated));
      } else {
        //@ts-ignore
        formData.set(field, values[field]);
      }
    });

    updateStudent({ id: location.state?.id, payload: formData })
      .then((value) => {
        mutate();
        notify(value?.message, { type: 'success' });
      })
      .finally(() => action.setSubmitting(false));
  };

  const { data, mutate } = useSWR(
    `${swrKeys.VIEW_STUDENT}-${location.state.id}`,
    async () => {
      const response = await ViewStudentDetails(location.state.id);

      return response?.student_response
        ? {
            ...response,
            student_response: Object.values(response?.student_response) || [],
          }
        : response;
    },
    {
      keepPreviousData: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );
  //@ts-ignore
  const loadOptions = async (search: string, _loadedOptions, { page }) => {
    const response = await ListEmployeeNames({ limit: 30, page, search });
    console.log(response);

    return {
      options: [],
      hasMore: [],
      additional: {
        page: page + 1,
      },
    };
  };

  /*******************************CUSTOM METHODS********************************************* */

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    setFieldValue: FormikHelpers<any>['setFieldValue']
  ) => {
    const max_limit =
      e?.target?.files?.[0]?.type === 'application/pdf'
        ? 1 * 1024 * 1024
        : 2 * 1024 * 1024;

    //@ts-ignore
    if (e?.target?.files?.[0]?.size > max_limit) {
      alert('File size exceeded');
      e.target.value = '';
      return;
    }
    setFieldValue(field, e?.target?.files?.[0]);
  };

  return (
    <div className="flex size-full flex-col gap-4 rounded-lg bg-white p-2 slideIn">
      <Formik
        initialValues={
          data || {
            status: '',
            student_response: [],
            mode_of_payment: '',
            amount_paid_to_agent: '',
            amount_paid_to_college: '',
            first_year: '',
            second_year: '',
            third_year: '',
            fourth_year: '',
            date_of_payment: '',
            passport_photo: '',
            SSLC: '',
            plus_two: '',
            aadhar: '',
            other_documents: '',
            approval_status: '',
            admin_messages: '',
            staff_assigned: '',
            staff_assigned_full_name: '',
          }
        }
        onSubmit={handleEmployeeRegister}
        // validationSchema={NewEmployeeSchema}
        enableReinitialize={true}
      >
        {({
          dirty,
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
            className="flex flex-col gap-4 p-4 overflow-auto flex-1"
            onSubmit={handleSubmit}
          >
            <h5 className="font-bold text-primary border-b py-1">Basic Info</h5>
            <section className="grid grid-cols-1 gap-4 gap-y-8  md:grid-cols-2">
              {Object.keys(values)
                .filter((field) => basicInfo.includes(field))
                .map((field, index) =>
                  field === 'place' ? (
                    <TextArea
                      key={index}
                      label={field.replace('_', ' ')}
                      name={field}
                      placeholder={field}
                      labelPlacement="outside"
                      maxRows={3}
                      disabled={isFieldDisabled(field)}
                      value={values?.[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <Input
                      key={index}
                      //@ts-ignore
                      label={field.replaceAll('_', ' ')}
                      name={field}
                      placeholder={field}
                      labelPlacement="outside"
                      //@ts-ignore
                      isInvalid={touched?.[field] && !!errors?.[field]}
                      //@ts-ignore
                      value={values?.[field]}
                      disabled={isFieldDisabled(field)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )
                )}
            </section>
            <h5 className="font-bold text-primary border-b py-1">Others</h5>
            <section className="grid grid-cols-1 gap-4 gap-y-8  md:grid-cols-2">
              {Object.keys(values)
                .filter(
                  (_fileld) =>
                    ![
                      ...basicInfo,
                      ...docFields,
                      'id',
                      'date_of_payment',
                      'staff_assigned',
                      'admitted_by',
                      'student_response',
                    ].includes(_fileld)
                )
                .map((field, index) => {
                  if (['admin_messages'].includes(field)) {
                    return (
                      <TextArea
                        key={index}
                        label={field.replace('_', ' ')}
                        name={field}
                        placeholder={field}
                        labelPlacement="outside"
                        maxRows={3}
                        disabled={isFieldDisabled(field)}
                        //@ts-ignore
                        value={values?.[field]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    );
                  } else if (
                    [
                      'status',
                      'approval_status',
                      'mode_of_payment',
                      'course_status',
                    ].includes(field)
                  ) {
                    return (
                      <Menu
                        //@ts-ignore
                        label={field.replaceAll('_', ' ')}
                        //@ts-ignore
                        options={mapDropDownOptions?.[field] || []}
                        onSelectItem={({ value }) =>
                          setFieldValue(field, value)
                        }
                        menuClass="w-full"
                        disabled={isFieldDisabled(field)}
                        isSelectable={true}
                        selectedItem={
                          //@ts-ignore
                          mapDropDownOptions?.[field]?.find(
                            (options: { value: any }) =>
                              //@ts-ignore
                              options.value === values?.[field]
                          )?.label
                        }
                      />
                    );
                  } else if (field === 'staff_assigned_full_name') {
                    return (
                      <AsyncSelect
                        //@ts-ignore
                        loadOptions={loadOptions}
                        isDisabled={!is_admin}
                        //@ts-ignore
                        label={field.replaceAll('_', ' ')}
                      />
                    );
                  }
                  return (
                    <Input
                      key={index}
                      //@ts-ignore
                      label={field.replaceAll('_', ' ')}
                      name={field}
                      placeholder={field}
                      labelPlacement="outside"
                      //@ts-ignore
                      isInvalid={touched?.[field] && !!errors?.[field]}
                      //@ts-ignore

                      value={values?.[field]}
                      disabled={isFieldDisabled(field)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  );
                })}
            </section>
            <FieldArray
              name="student_response"
              render={(arrayHelpers) => (
                <>
                  <h5 className="font-bold text-primary border-b py-1">
                    Student Response
                  </h5>
                  <div>
                    <button
                      type="button"
                      className="text-primary text-base py-1 flex gap-2 items-center"
                      onClick={() => arrayHelpers.push('')}
                    >
                      Add new response {GetIcons('add')}
                    </button>

                    <section className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2">
                      {values?.['student_response']?.map(
                        (calls: string, _ind: number) => (
                          <div className="flex gap-2 w-full" key={_ind}>
                            <TextArea
                              key={_ind}
                              label={`calls ${_ind + 1}`}
                              name={`student_response.${_ind}`}
                              labelPlacement="outside"
                              maxRows={3}
                              disabled={isFieldDisabled('student_response')}
                              value={calls}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              containerClass="w-full"
                            />
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(_ind)}
                            >
                              {GetIcons('delete')}
                            </button>
                          </div>
                        )
                      )}
                    </section>
                  </div>
                </>
              )}
            ></FieldArray>
            {location.state?.is_admitted && (
              <>
                <h5 className="font-bold text-primary border-b py-1">
                  Documnets
                </h5>
                <div className="flex gap-2 items-center text-red-500 text-sm">
                  <span>{GetIcons('info')} </span>
                  File size is limited to 4MB for pdf and 2MB for images
                </div>
                <section className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2">
                  {Object.keys(values)
                    .filter((field) => docFields.includes(field))
                    .map((field, index) => (
                      <div>
                        <label
                          key={index}
                          htmlFor={field}
                          className="capitalize"
                        >
                          {field.replace('_', ' ')}
                        </label>
                        <input
                          type="file"
                          name={field}
                          id={field}
                          className="font-medium p-2 border-1 rounded-lg cursor-pointer text-primary flex gap-2 items-center"
                          accept=".pdf,.jpg,.jpeg"
                          onChange={(e) =>
                            handleFileUpload(e, field, setFieldValue)
                          }
                          onBlur={handleBlur}
                        />
                      </div>
                    ))}
                </section>
              </>
            )}

            <div className="col-span-2 flex items-center gap-3">
              <Button
                label="Discard"
                color="danger"
                type="button"
                disabled={!dirty}
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

export default EditStudent;
