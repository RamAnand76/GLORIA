import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PageLoader from '@/components/pageLoader';
import { authContext } from '@/context/authContext';

const PrivateRoute = () => {
  //@ts-ignore
  const { isValidUser } = useContext(authContext);
  if (isValidUser === null) {
    return <PageLoader />;
  } else if (!isValidUser) {
    return <Navigate to={'/auth'} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
