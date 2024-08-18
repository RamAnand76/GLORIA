import { NextUIProvider } from '@nextui-org/react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import './index.scss';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider className="h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer />
        <App />
      </Suspense>
    </NextUIProvider>
  </React.StrictMode>
);
