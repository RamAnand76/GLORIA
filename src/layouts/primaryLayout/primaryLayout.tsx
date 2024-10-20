import GetIcons from '@/assets/icons';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const PrimaryLayout = () => {
  const location = useLocation();
  const path = location.pathname.split('/').filter(Boolean);
  const [showNav, setShowBtn] = useState<boolean>(false);

  return (
    <div className="flex h-full w-full slideIn">
      <Navbar showNav={showNav} toggleNav={setShowBtn} />
      <div
        className={`flex flex-col gap-1 ${showNav && 'ml-64'} lg:ml-64 w-full overflow-hidden sidebar`}
      >
        <Header toggleNav={setShowBtn} />
        {path.length > 1 && (
          <div className="flex items-center gap-2 px-3 ">
            <button
              className="p-1 bg-white rounded-lg"
              onClick={() => window.history.back()}
            >
              {GetIcons('backArrow')}
            </button>
            <Breadcrumbs isDisabled>
              {path?.map((path: string, index: number) => (
                <BreadcrumbItem className="capitalize" key={index}>
                  {path}
                </BreadcrumbItem>
              ))}
            </Breadcrumbs>
          </div>
        )}
        <div className="flex-1 w-full h-full px-2 pb-2 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrimaryLayout;
