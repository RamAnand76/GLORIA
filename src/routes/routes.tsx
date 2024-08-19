import PrimaryLayout from '@/layouts/primaryLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PATH from './paths';
import PrivateRoute from './privateRoutes';
import PublicRoute from './publicRoutes';

const Auth = lazy(() => import('@/pages/auth'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Employees = lazy(() => import('@/pages/employees'));
const Students = lazy(() => import('@/pages/students'));
const AddEmployee = lazy(() => import('@/pages/addEmployee'));

const Router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: PATH.auth,
        element: <Auth />,
      },
    ],
  },
  {
    path: '/',
    element: <PrimaryLayout />,
    ErrorBoundary: () => <div>loading</div>,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          {
            path: PATH.dashboard,
            element: <Dashboard />,
          },
          {
            path: PATH.employees,
            element: <Employees />,
          },
          {
            path: PATH.students,
            element: <Students />,
          },
          {
            path: PATH.addEmployees,
            element: <AddEmployee />,
          },
        ],
      },
    ],
  },
]);
export default Router;
