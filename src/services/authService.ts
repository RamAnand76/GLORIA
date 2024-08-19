import { getLocalStorage, setLocalStorage } from '@/utils/helpers/helpers';
import { api, privateAPI } from './config/api.config';

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

export const ValidateToken = async () => {
  try {
    const response = await privateAPI.post('auth/validate-token/', {
      access: getLocalStorage('_at'),
    });
    return response.data.valid_token;
  } catch (error) {
    return false;
  }
};
