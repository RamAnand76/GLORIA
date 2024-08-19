import { handleError } from '@/utils/helpers/errorHandler';
import { privateAPI } from './config/api.config';

export const ListStudents = async ({ limit, page }: IListTableData) => {
  try {
    const response = await privateAPI.get(
      `admin/students/?page=${page}&page_size=${limit}`
    );
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
