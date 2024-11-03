import { isValidPhoneNumber } from 'react-phone-number-input';
import * as Yup from 'yup';

export const AuthSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const NewEmployeeSchema = Yup.object({
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
  email: Yup.string().email().required('Required'),
  phone_number: Yup.string().required('Required'),
  is_admin: Yup.boolean().required(),
  is_employee: Yup.boolean().required(),
});

const commmonStudentSchema = {
  name: Yup.string().required('Required').max(50),
  email: Yup.string().email('Enter a valid email').required('Required'),
  phone_number: Yup.string()
    .test('is-valid-phone', 'Enter a valid number', (value) => {
      return typeof value == 'string' && isValidPhoneNumber(value);
    })
    .required('Required'),
  place: Yup.string().max(250, 'Character limit exceeded'),
  course: Yup.string().max(100),
};
export const AddStudentSchema = Yup.object(commmonStudentSchema);

export const editStudentValidationSchema = Yup.object().shape({
  ...commmonStudentSchema,
  phone_number: Yup.string().required(),
  approval_status: Yup.string().oneOf(
    ['approved', 'not_approved'],
    'Invalid approval status'
  ),
  course_status: Yup.string().oneOf(
    ['ongoing', 'completed', 'cancelled'],
    'Invalid course status'
  ),
  admin_messages: Yup.string().nullable(), // Can be null
  mode_of_payment: Yup.string().oneOf(
    ['upi', 'cash', 'net_banking'],
    'Invalid mode of payment'
  ),
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
  passport_photo: Yup.mixed().nullable(),
  SSLC: Yup.mixed().nullable(),
  plus_two: Yup.mixed().nullable(),
  aadhar: Yup.mixed().nullable(),
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

export const LocationValidationSchema = Yup.object().shape({
  center_latitude: Yup.number()
    .required('Center latitude is required')
    .min(-90, 'Latitude must be at least -90')
    .max(90, 'Latitude must be at most 90'),
  center_longitude: Yup.number()
    .required('Center longitude is required')
    .min(-180, 'Longitude must be at least -180')
    .max(180, 'Longitude must be at most 180'),
  radius: Yup.number().required('Radius is required'),
});
export const EmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});
export const ResetPasswordSchema = Yup.object().shape({
  new_password: Yup.string()
    .required('This field is required')
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/[A-Z]/, 'Password should contain at least 1 capital letter.')
    .matches(/[a-z]/, 'Password should contain at least 1 lowercase letter.')
    .matches(
      /[@$!%*?&#]/,
      'Password should contain at least 1 special character.'
    ),
  confirm_password: Yup.string()
    .required('This field is required')
    .oneOf([Yup.ref('new_password')], 'Password doesn"t match.'),
  otp: Yup.string()
    .matches(/^\d+$/, 'OTP should contain only digits')
    .required('This field is required'),
});
