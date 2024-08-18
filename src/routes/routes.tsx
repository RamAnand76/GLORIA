import PrimaryLayout from '@/layouts/primaryLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PATH from './paths';

const Auth = lazy(() => import('@/pages/auth'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Employees = lazy(() => import('@/pages/employees'));
const Students = lazy(() => import('@/pages/students'));
const AddEmployee = lazy(() => import('@/pages/addEmployee'));

const Router = createBrowserRouter([
  {
    path: PATH.auth,
    element: <Auth />,
  },
  {
    path: '/',
    element: <PrimaryLayout />,
    ErrorBoundary: () => <div>loading</div>,
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
]);
export default Router;
