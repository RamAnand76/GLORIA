import { isValidNumber } from 'libphonenumber-js';
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

const commmonStudentSchema = {
  name: Yup.string().required('Required').max(50),
  email: Yup.string().email('Enter a valid email'),
  phone_number: Yup.string()
    .test(
      'is-valid-phone',
      'Enter a valid number',
      (value) => typeof value == 'string' && isValidNumber(value?.toString())
    )
    .required('Required'),
  place: Yup.string().max(250, 'Character limit exceeded'),
  course: Yup.string().max(100),
};
export const AddStudentSchema = Yup.object(commmonStudentSchema);

export const editStudentValidationSchema = Yup.object().shape({
  ...commmonStudentSchema,
  approval_status: Yup.object({
    label: Yup.string(),
    value: Yup.string().oneOf(
      ['approved', 'not_approved'],
      'Invalid approval status'
    ),
  }),
  course_status: Yup.object({
    label: Yup.string(),
    value: Yup.string().oneOf(
      ['ongoing', 'completed', 'cancelled'],
      'Invalid course status'
    ),
  }),
  admin_messages: Yup.string().nullable(), // Can be null
  mode_of_payment: Yup.object({
    label: Yup.string(),
    value: Yup.string()
      .oneOf(['upi', 'cash', 'net_banking'], 'Invalid mode of payment')
      .required('Mode of payment value is required'),
  }),
  student_status: Yup.object({
    label: Yup.string(),
    value: Yup.string().oneOf(
      ['interested', 'not_interested', 'pending', 'accepted', 'follow_up'],
      'Invalid status'
    ),
  }),
  amount_paid_to_agent: Yup.number()
    .nullable()
    .typeError('Amount must be a number')
    .min(0, 'Amount cannot be negative'),
  amount_paid_to_college: Yup.number()
    .nullable()
    .typeError('Amount must be a number')
    .min(0, 'Amount cannot be negative'),
  first_year: Yup.string().nullable(),
  second_year: Yup.string().nullable(),
  third_year: Yup.string().nullable(),
  fourth_year: Yup.string().nullable(),
  date_of_payment: Yup.date().nullable(),
  passport_photo: Yup.mixed().required('Photo is required'),
  SSLC: Yup.mixed().nullable(),
  plus_two: Yup.mixed().nullable(),
  aadhar: Yup.mixed().required('Aadhar is required'),
  other_documents: Yup.mixed().nullable(),
  staff_assigned: Yup.string(),
  staff_assigned_full_name: Yup.string(),
});

export const CollegeSchema = Yup.object({
  college_name: Yup.string().required('Required'),
  course_name: Yup.string().required('Required'),
  college_location: Yup.string().required('Required'),
  course_description: Yup.string(),
  brochure: Yup.mixed().nullable(),
});
