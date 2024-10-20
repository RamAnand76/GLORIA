import GetIcons from '@/assets/icons';
import Logo from '@/assets/images/LOGO_OG.jpg';
import useAuthContext from '@/context/index';
import { navItems } from '@/utils/constants';
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Navbar: React.FC<{
  showNav: boolean;
  toggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showNav, toggleNav }) => {
  const navigate = useNavigate();
  const { isAdmin } = useAuthContext();
  const [activePath, setActivePath] = useState(
    location.pathname.split('/').filter(Boolean)[0]
  );

  return (
    <aside
      className={`fixed ${!showNav && '-ml-64'} lg:ml-0 sidebar inset-y-0 left-0 bg-primary text-white w-64`}
    >
      <div className="flex items-center justify-between py-1 px-3">
        <img src={Logo} alt="Logo" className="h-[70px]" />
        <button
          type="button"
          className="lg:hidden"
          onClick={() => toggleNav((cv) => !cv)}
        >
          {GetIcons('close')}
        </button>
      </div>
      <nav className="flex flex-col gap-2 py-8 px-6 space-y-2 text-white">
        {navItems
          .filter((_item) => isAdmin || _item !== 'employees')
          .map((item, index: number) => (
            <span
              className={`px-2 py-1 flex gap-4 items-center text-[#e2e8ee] capitalize cursor-pointer ${item === activePath && 'bg-[#4a5d67] rounded-lg'}`}
              key={index}
              onClick={() => {
                setActivePath(item);
                navigate(`/${item}`);
              }}
            >
              {GetIcons(item)} <span>{item}</span>
            </span>
          ))}
      </nav>
    </aside>
  );
};
export default memo(Navbar);
