import PageLoader from '@/components/pageLoader';
import PrimaryLayout from '@/layouts/primaryLayout';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PATH from './paths';
import PrivateRoute from './privateRoutes';
import PublicRoute from './publicRoutes';

const Auth = lazy(() => import('@/pages/auth'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Employees = lazy(() => import('@/pages/employees'));
const Students = lazy(() => import('@/pages/students'));
const AddEmployee = lazy(() => import('@/pages/addEmployee'));
const AddStudents = lazy(() => import('@/pages/addStudents'));
const EditStudent = lazy(() => import('@/pages/editStudent'));
const Colleges = lazy(() => import('@/pages/colleges'));
const AddCollege = lazy(() => import('@/pages/addCollege'));

const Router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<PageLoader />}>
        <PublicRoute />
      </Suspense>
    ),
    children: [
      {
        path: PATH.auth,
        element: <Auth />,
      },
    ],
  },
  {
    element: <PrimaryLayout />,
    ErrorBoundary: () => <div>error</div>,
    children: [
      {
        element: (
          <Suspense fallback={<PageLoader />}>
            <PrivateRoute />
          </Suspense>
        ),
        children: [
          {
            index: true,
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
          {
            path: PATH.addStudents,
            element: <AddStudents />,
          },
          {
            path: PATH.editStudent,
            element: <EditStudent />,
          },
          {
            path: PATH.colleges,
            element: <Colleges />,
          },
          {
            path: PATH.addColleges,
            element: <AddCollege />,
          },
          {
            path: PATH.editCollege,
            element: <AddCollege />,
          },
        ],
      },
    ],
  },
]);
export default Router;
