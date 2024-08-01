import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { NextUIProvider } from '@nextui-org/react';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider className="h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </NextUIProvider>
  </React.StrictMode>
);
