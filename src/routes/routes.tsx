import PrimaryLayout from '@/layouts/primaryLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PATH from './paths';

const Dashboard = lazy(() => import('@/pages/dashboard'));
const Employees = lazy(() => import('@/pages/employees'));
const Students = lazy(() => import('@/pages/students'));

const Router = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
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
    ],
  },
]);
export default Router;
