import Header from '@/components/header';
import Navbar from '@/components/navbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const PrimaryLayout = () => {
  const [showNav, setShowBtn] = useState<boolean>(false);
  return (
    <div className="flex h-full w-full">
      <Navbar showNav={showNav} toggleNav={setShowBtn} />
      <div className="flex flex-col lg:ml-64 w-full">
        <Header toggleNav={setShowBtn} />
        <div className="flex-1 w-full h-full p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrimaryLayout;
