import { GetUserDetails, ValidateToken } from '@/services/authService';
import useStore from '@/store/store';
import { swrKeys } from '@/utils/constants';
import React, { createContext, useEffect, useState } from 'react';
import useSWR from 'swr';
export interface AuthContextProps {
  isValidUser: boolean | null;
  isAdmin: boolean;
  isLoading: boolean;
}
export const authContext = createContext<AuthContextProps | null>(null);
const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setUserDetails } = useStore((state) => state);
  const [tokenData, setIsTokenData] = useState<{
    valid_token: boolean | null;
    is_admin: boolean;
  }>({ valid_token: null, is_admin: false });
  useEffect(() => {
    ValidateToken().then((value) => setIsTokenData(value));
  }, []);

  const { isLoading } = useSWR(
    `${swrKeys.USER_DETAILS}`,
    async () => {
      const response = await GetUserDetails();
      setUserDetails(response);
      return response;
    },
    {
      keepPreviousData: true,
      revalidateIfStale: false,
      revalidateOnMount: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const values = {
    isValidUser: tokenData.valid_token,
    isAdmin: tokenData.is_admin,
    isLoading,
  };
  return (
    <authContext.Provider value={values}>
      <>{children}</>
    </authContext.Provider>
  );
};

export default AuthContextProvider;
