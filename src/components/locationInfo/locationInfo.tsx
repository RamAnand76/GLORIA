import { useEffect, useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import Input from '@/components/input';
import Button from '@/components/button';
import { notify } from '@/utils/helpers/helpers';
import {
  GetLocationDetails,
  SetLocationDetails,
} from '@/services/setttingsService';
import { LocationValidationSchema } from '@/utils/validationSchemas';

const LocationBox: React.FC = () => {
  const [initialValue, setInitialValue] = useState<ILocationDetails>({
    center_latitude: null,
    center_longitude: null,
    radius: null,
  });
  /******************************REACT-HOOKS******************************************* */

  useEffect(() => {
    getLocationData();
  }, []);

  /******************************SERVICE CALLS******************************************* */
  const getLocationData = () => {
    GetLocationDetails()
      .then((data) => {
        setInitialValue(data);
      })
      .catch(() => notify('Error fetching data', { type: 'error' }));
  };

  const handleFormSubmit = async (
    values: ILocationDetails,
    actions: FormikHelpers<ILocationDetails>
  ) => {
    try {
      const resp = await SetLocationDetails(values);
      notify(resp.message, { type: 'success' });
    } catch (error) {
    } finally {
      actions.setSubmitting(false);
    }
  };

  const findCurrentLocation = (
    setValues: FormikHelpers<ILocationDetails>['setValues']
  ) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setValues((cv) => ({
            ...cv,
            center_latitude: latitude,
            center_longitude: longitude,
          }));
        },
        (err) => {
          notify('Unable to retrieve location. ' + err.message, {
            type: 'error',
          });
        }
      );
    } else {
      notify('Geolocation is not supported by this browser. Please type', {
        type: 'error',
      });
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleFormSubmit}
      enableReinitialize={true}
      validationSchema={LocationValidationSchema}
    >
      {({
        values,
        touched,
        errors,
        isSubmitting,
        resetForm,
        handleChange,
        handleBlur,
        setValues,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h3 className="text-red-500">
            Please enter your office location information. Note that attendance
            recorded in this area will be accepted. If you have trouble locating
            it, please click the button.
          </h3>
          <Button
            label="Find Location"
            type="button"
            color="primary"
            className="w-fit text-white font-medium ml-auto"
            onClick={() => findCurrentLocation(setValues)}
          />
          <div className="flex flex-col gap-3">
            <Input
              type="number"
              label="Latitude*"
              placeholder="type here"
              name="center_latitude"
              labelPlacement="outside"
              //@ts-ignore
              value={values.center_latitude}
              isInvalid={touched.center_latitude && !!errors.center_latitude}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              type="number"
              label="Longitude*"
              placeholder="type here"
              name="center_longitude"
              labelPlacement="outside"
              //@ts-ignore
              value={values.center_longitude}
              isInvalid={touched.center_longitude && !!errors.center_longitude}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Input
              type="number"
              label="Radius in meters*"
              placeholder="type here"
              name="radius"
              labelPlacement="outside"
              isInvalid={touched.radius && !!errors.radius}
              //@ts-ignore
              value={values.radius}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <footer className="flex items-center gap-3 col-span-2">
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
          </footer>
        </form>
      )}
    </Formik>
  );
};

export default LocationBox;
