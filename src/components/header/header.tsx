import GetIcons from '@/assets/icons';
import Menu from '@/components/dropdown';
import { Avatar } from '@nextui-org/react';
import React from 'react';
export const Header: React.FC<{
  toggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleNav }) => {
  return (
    <header className="flex justify-between bg-white w-full h-[64px] p-3 sticky top-0 z-50">
      <button
        type="button"
        className="lg:invisible"
        onClick={() => toggleNav((cv) => !cv)}
      >
        {GetIcons('menu')}
      </button>
      <div className="flex gap-1">
        <Avatar />
        <Menu title="Admin" options={['hello', 'hi']} />
      </div>
    </header>
  );
};
export default Header;
