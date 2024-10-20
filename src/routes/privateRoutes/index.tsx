import PageLoader from '@/components/pageLoader';
import useAuthContext from '@/context/index';
import { Navigate, Outlet } from 'react-router-dom';
import PATH from '../paths';

const PrivateRoute = () => {
  const { isValidUser, isAdmin } = useAuthContext();
  const rootPath = location?.pathname;

  if (isValidUser === null) {
    return <PageLoader />;
  } else if (!isValidUser) {
    return <Navigate to={'/auth'} />;
  } else if (
    !isAdmin &&
    [PATH.employees, PATH.addStudents].includes(rootPath)
  ) {
    window.history.back();
    return;
  }
  return <Outlet />;
};

export default PrivateRoute;
