import { handleError } from '@/utils/helpers/errorHandler';
import { privateAPI } from './config/api.config';

export const ListStudents = async ({
  limit,
  page,
  id = '',
  type = 'all',
  student_status,
}: IListStudents) => {
  try {
    const response = await privateAPI.get(
      `employee/filtered-students/?page=${page}&page_size=${limit}&type=${type}&student_status=${student_status}&employee_id=${id}`
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const AddStudent = async (payload: IAddStudent) => {
  try {
    const response = await privateAPI.post('admin/add-student/', payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
export const AddBulkStudents = async (payload: TBulkAddStudent) => {
  try {
    const response = await privateAPI.post(
      'admin/bulk-add-students/',
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
export const ViewStudentDetails = async (id: string) => {
  try {
    const response = await privateAPI.get(`employee/student-detail/${id}/`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const admitStudents = async (id: string) => {
  try {
    const response = await privateAPI.post(`employee/admit-student/${id}/`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteStudents = async (payload: { student_ids: string[] }) => {
  try {
    const response = await privateAPI.post(
      `employee/delete-students/`,
      payload
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
export const updateStudent = async ({
  id,
  payload,
}: {
  id: string;
  payload: FormData;
}) => {
  try {
    const response = await privateAPI.put(
      `employee/students/update/${id}/`,
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    handleError(error);
    return Promise.reject();
  }
};

export const downloadStudentPdf = async (id: string) => {
  try {
    const response = await privateAPI.get(`admin/students/${id}/download-pdf/`, {
      responseType: 'blob', // Ensures the response is treated as a file
    });
    return response.data;
  } catch (error) {
    handleError(error);
    return Promise.reject(error);
  }
};
