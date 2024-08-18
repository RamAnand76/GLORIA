import PATH from '@/routes/paths';
import { toast, ToastOptions } from 'react-toastify';
export const createNavItem = (name: string) => {
  return {
    name,
    //@ts-ignore
    url: PATH[name],
    icon: name.toLowerCase(), // Or keep it the same as name, if required
  };
};

export const setLocalStorage = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  localStorage.setItem(key, value);
};
export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
export const notify = (message: string, options: ToastOptions) =>
  toast(message, { ...options, pauseOnHover: false, autoClose: 3000 });
