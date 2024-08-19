import * as Yup from 'yup';

export const AuthSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const NewEmployeeSchema = Yup.object({
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  phone_number: Yup.string().required('Required'),
  isAdmin: Yup.boolean().required(),
  isEmployee: Yup.boolean().required(),
});
