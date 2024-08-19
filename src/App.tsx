import Routes from '@/routes/routes';
import AuthContextProvider from '@/context/authContext';
import { RouterProvider } from 'react-router-dom';
const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={Routes} />
    </AuthContextProvider>
  );
};

export default App;
