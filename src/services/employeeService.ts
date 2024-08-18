import { handleError } from '@/utils/helpers/errorHandler';
import { privateAPI } from './config/api.config';

export const Register = async (payload: IRegister) => {
  try {
    const response = await privateAPI.post('auth/register/', payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const BulkRegister = async (payload: IBulkRegister) => {
  try {
    const response = await privateAPI.post('auth/bulk-register/', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const ListEmployees = async ({ limit, page }: IListEmployees) => {
  try {
    const response = await privateAPI.get(
      `admin/employees/?page=${page}&page_size=${limit}`
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
