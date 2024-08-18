import { getLocalStorage } from '@/utils/helpers/helpers';
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

    if (error.response.status === 401) {
      window.location.replace('/auth');
      return Promise.reject(error);
    }

    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true
    //   const refreshToken = localStorageService.getRefreshToken()
    //   return axios
    //     .post('/auth/token', {
    //       refresh_token: refreshToken
    //     })
    //     .then(res => {
    //       if (res.status === 201) {
    //         localStorageService.setToken(res.data)
    //         axios.defaults.headers.common['Authorization'] =
    //           'Bearer ' + localStorageService.getAccessToken()
    //         return axios(originalRequest)
    //       }
    //     })
    // }
    return Promise.reject(error);
  }
);
