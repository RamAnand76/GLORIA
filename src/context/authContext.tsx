import React, { createContext, useEffect, useState } from 'react';
import { ValidateToken } from '@/services/authService';

interface AuthContextProps {
  isValidUser: boolean | null;
}
export const authContext = createContext<AuthContextProps | null>(null);
const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isValidUser, setIsValidUser] = useState<boolean | null>(null);
  useEffect(() => {
    ValidateToken().then((value) => setIsValidUser(value));
  }, []);
  const values = { isValidUser };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
