import Logo1 from '@/assets/images/LOGO_OG.jpg';
import Button from '@/components/button';
import Input from '@/components/input';
import PATH from '@/routes/paths';
import { Login } from '@/services/authService';
import { notify } from '@/utils/helpers/helpers';
import { AuthSchema } from '@/utils/validationSchemas';
import { Link } from '@nextui-org/react';
import { Formik } from 'formik';
import React, { useState } from 'react';

const Auth: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleFormSubmit = (values: ILogin) => {
    setIsLoading(true);
    Login(values)
      .then(() => location.replace(PATH.home))
      .catch((error) => notify(error.response.data.detail, { type: 'error' }))
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="flex bg-white h-full">
      <section className="hidden sm:flex w-1/2 bg-primary">
        <img src={Logo1} alt="logo" className="m-auto" />
      </section>
      <section className="w-full sm:w-1/2 bg-primary sm:bg-white flex">
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={handleFormSubmit}
          validationSchema={AuthSchema}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            errors,
            values,
            touched,
          }) => (
            <form
              className="border-primary border rounded-lg p-4 m-auto flex flex-col gap-4 w-64 bg-white"
              onSubmit={handleSubmit}
            >
              <h2 className="text-primary capitalize font-semibold text-xl text-center">
                Log in
              </h2>

              <Input
                autoFocus
                name="username"
                label="Email/Username"
                placeholder="Enter your email/username"
                variant="bordered"
                labelPlacement="outside"
                className="outline-none"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.username && !!errors.username}
                errorMessage={errors.username}
              />
              <Input
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
                labelPlacement="outside"
                className="outline-none"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && !!errors.password}
                errorMessage={errors.password}
              />
              <div className="flex py-2 px-1 justify-between w-full">
                <Link color="primary" href="#" size="sm">
                  Forgot password?
                </Link>
              </div>

              <footer>
                <Button
                  color="primary"
                  label="Sign in"
                  type="submit"
                  isLoading={isLoading}
                />
              </footer>
            </form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default Auth;
