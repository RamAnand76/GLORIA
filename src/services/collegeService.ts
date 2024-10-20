import { handleError } from '@/utils/helpers/errorHandler';
import { privateAPI } from './config/api.config';

export const ListColleges = async () => {
  try {
    const response = await privateAPI.get('admin/colleges-courses/');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const RegisterCollege = async (payload: FormData, _id?: string) => {
  try {
    const response = await privateAPI.post(
      'admin/colleges-courses/add/',
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

export const DeleteCollege = async (ids: string[]) => {
  try {
    const response = await privateAPI.delete('admin/colleges-courses/delete/', {
      data: { ids },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const UpdateCollege = async (payload: FormData, id: string) => {
  try {
    const response = await privateAPI.patch(
      `admin/colleges-courses/update/${id}/`,
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
export const GetCourseDetails = async (id: string) => {
  try {
    const response = await privateAPI.get(
      `admin/colleges-courses/details/${id}/`
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
