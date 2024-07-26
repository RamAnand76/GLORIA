import Home from '@/pages/home';
import { createBrowserRouter } from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);
export default Router;
