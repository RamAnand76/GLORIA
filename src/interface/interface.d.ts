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
interface IBulkRegister {
  file: File;
}
interface IListEmployees {
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
