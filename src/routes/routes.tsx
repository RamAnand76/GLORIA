
import { createBrowserRouter } from 'react-router-dom';
import Employees from '@/pages/employees/employees';
import Home from '@/pages/home';
import ViewEmployee from '@/pages/employees/viewEmployee';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'employees',
    element: <Employees />,
  },
  {
    path: 'view-employee',
    element: <ViewEmployee />,
  },
]); 
export default Router;
