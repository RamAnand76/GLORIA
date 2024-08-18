import { setLocalStorage } from '@/utils/helpers/helpers';
import { api } from './config/api.config';

export const Login = async (payload: ILogin) => {
  try {
    const response = await api.post('auth/login/', payload);
    setLocalStorage({ key: '_at', value: response.data.access });
    setLocalStorage({ key: '_rt', value: response.data.refresh });
    return true;
  } catch (error) {
    throw error;
  }
};
