import GetIcons from '@/assets/icons';

export const navItems: string[] = [
  'dashboard',
  'employees',
  'students',
  'colleges',
];
export const swrKeys = {
  EMPLOYEES: 'employees',
  STUDENTS: 'students',
  VIEW_STUDENT: 'view_student',
  USER_DETAILS: 'user_details',
  COLLEGES: 'colleges',
  DASHBOARD: 'dashoboard',
};
export const employeeColums: TColumn[] = [
  { title: { label: 'FIRST NAME' }, d_name: 'first_name', type: 'string' },
  {
    title: { label: 'LAST NAME' },
    d_name: 'last_name',

    type: 'string',
  },
  {
    title: {
      label: 'EMAIL',
    },
    d_name: 'email',
    type: 'string',
  },
  {
    title: {
      label: 'PHONE_NUMBER',
    },
    d_name: 'phone_number',
    type: 'string',
  },
];
export const studentColums: TColumn[] = [
  {
    title: { label: 'NAME' },
    type: 'string',
    d_name: 'name',
  },
  {
    title: { label: 'EMAIL' },
    type: 'string',
    d_name: 'email',
  },
  {
    title: { label: 'PHONE NUMBER' },
    type: 'string',
    d_name: 'phone_number',
  },
  {
    title: { label: 'COURSE' },
    type: 'string',
    d_name: 'course',
  },
  {
    title: {
      label: 'STAFF ASSIGNED',
    },
    type: 'string',
    d_name: 'staff_assigned_full_name',
  },
  {
    d_name: 'status',
    type: 'status',
    title: { label: 'STATUS' },
  },
  {
    d_name: 'is_admitted',
    type: 'string',
    title: { label: 'Is Admitted' },
  },
];

export const headerMenuOptions = [
  { label: 'Settings', value: 'settings' },
  { label: 'Logout', value: 'logout' },
];
export const paymentModeOptions = [
  { label: 'Cash', value: 'cash' },
  { label: 'UPI', value: 'upi' },
  { label: 'Net Banking', value: 'net_banking' },
];

export const studentStatusOption = [
  {
    label: 'Interested',
    value: 'interested',
  },
  {
    label: 'Not Interested',
    value: 'not_interested',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
  {
    label: 'Accepted',
    value: 'accepted',
  },
  {
    label: 'Follow Up',
    value: 'follow_up',
  },
];

export const approvalStatus = [
  {
    label: 'Approved',
    value: 'approved',
  },
  {
    label: 'Not Approved',
    value: 'not_approved',
  },
];

export const courseStatus = [
  {
    label: 'Ongoing',
    value: 'ongoing',
  },
  {
    label: 'Cancelled',
    value: 'cancelled',
  },
  {
    label: 'Completed',
    value: 'completed',
  },
];
export const studentFilterOptions = [
  {
    label: 'Admission Status',
    iterables: [
      { label: 'All Students', value: 'all' },
      { label: 'Admitted', value: 'admitted_students' },
      { label: 'Not Admitted', value: 'not_admitted_students' },
    ],
  },
  {
    label: 'Student Status',
    iterables: [
      { label: 'Interested', value: 'interested' },
      { label: 'Not Interested', value: 'not_interested' },
      { label: 'Pending', value: 'pending' },
      { label: 'Accepted', value: 'accepted' },
      { label: 'Follow Up', value: 'follow_up' },
    ],
  },
];

export const colorMapping: { [status: string]: string } = {
  PENDING: 'warning',
  ADMITTED: 'success',
  'NOT ADMITTED': 'danger',
};

export const prohibittedStudentFields = [];

export const mapDropDownOptions = {
  status: studentStatusOption,
  mode_of_payment: paymentModeOptions,
  approval_status: approvalStatus,
  course_status: courseStatus,
};
export const basicInfo = ['name', 'email', 'phone_number', 'place', 'course'];

export const adminEditableFields = [
  ...basicInfo,
  'approval_status',
  'admin_messages',
  'course_status',
  'staff_assigned',
  'staff_assigned_full_name',
];

export const tableHeaderOptions = [
  {
    label: (
      <span className="flex items-center gap-2">
        {GetIcons('delete')} Delete All
      </span>
    ),
    value: 'delete',
  },
];
export const employeeRestrictedFields: string[] = [
  'id',
  'approval_status',
  'admin_messages',
  'staff_assigned',
  'staff_assigned_full_name',
  'admitted_by_full_name',
  'commision',
];

export const docFields: string[] = [
  'passport_photo',
  'SSLC',
  'plus_two',
  'aadhar',
  'other_documents',
];

export const collegeColums: TColumn[] = [
  {
    title: { label: 'COLLEGE' },
    type: 'string',
    d_name: 'college_name',
  },
  {
    title: { label: 'COURSE' },
    type: 'string',
    d_name: 'course_name',
  },
  {
    title: { label: 'lOCATION' },
    type: 'string',
    d_name: 'college_location',
  },
  {
    title: { label: 'BROCHURE' },
    type: 'string',
    d_name: 'brochure',
  },
];
