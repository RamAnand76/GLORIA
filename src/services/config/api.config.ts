import { getLocalStorage, setLocalStorage } from '@/utils/helpers/helpers';
import axios from 'axios';

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const privateAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**Request Interceptor */
privateAPI.interceptors.request.use(
  (config) => {
    const token = getLocalStorage('_at');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**Response Interceptor */
privateAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (
      [401, 400].includes(error.response.status) &&
      originalRequest.url ===
        `${import.meta.env.VITE_BASE_URL}/auth/validate-token`
    ) {
      window.location.replace('/auth');
      return Promise.reject(error);
    }

    if ([401, 400].includes(error.response.status) && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getLocalStorage('_rt');
      return axios
        .post(`${import.meta.env.VITE_BASE_URL}/auth/token/refresh/`, {
          refresh: refreshToken,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.access);

            setLocalStorage({ key: '_at', value: res.data.access });
            axios.defaults.headers.common['Authorization'] =
              'Bearer ' + res.data.access;
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);
