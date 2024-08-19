import GetIcons from '@/assets/icons';
import Menu from '@/components/dropdown';
import { headerMenuOptions } from '@/utils/constants';
import { Avatar } from '@nextui-org/react';
import React from 'react';
export const Header: React.FC<{
  toggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleNav }) => {
  const handleAction = (actionName: string) => {
    if (actionName === 'Logout') {
      localStorage.clear();
      window.location.reload();
    }
    return;
  };
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
        <Menu
          title="Admin"
          options={headerMenuOptions}
          onSelectItem={handleAction}
        />
      </div>
    </header>
  );
};
export default Header;
