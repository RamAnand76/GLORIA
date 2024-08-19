interface ILogin {
  password: string;
  username: string;
}
interface IRegister {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  is_admin: boolean;
  is_employee: boolean;
}
type TBulkRegister = FormData;
interface IListTableData {
  page: number;
  limit: number;
}
interface IListEmployees_R {
  count: number;
  results: IEmployee[];
}
interface IEmployee {
  id: string;
  username: string;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  is_employee: boolean;
}
interface IBulkRegister_R {
  download_link: string;
  successful_registrations: number;
  failed_registrations: number;
}
interface IStudent {
  id: string;
  name: string;
  email: null | string;
  phone_number: string;
  place: string;
  course: string;
  staff_assigned: string;
  feedback: null | string;
  status: string;
}

interface IStudent_R {
  count: number;
  results: IStudent[];
}
