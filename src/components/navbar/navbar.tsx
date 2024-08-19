import GetIcons from '@/assets/icons';
import { navItems } from '@/utils/constants';
import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '@/assets/images/LOGO_OG.jpg';
export const Navbar: React.FC<{
  showNav: boolean;
  toggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showNav, toggleNav }) => (
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
      {navItems.map((item, index: number) => (
        <Link
          to={`/${item}`}
          className="flex gap-4 items-center text-[#e2e8ee] capitalize"
          key={index}
        >
          {GetIcons(item)} <span>{item}</span>
        </Link>
      ))}
    </nav>
  </aside>
);
export default Navbar;
