import GetIcons from '@/assets/icons';
import Menu from '@/components/dropdown';
import useStore from '@/store/store';
import { headerMenuOptions } from '@/utils/constants';
import { Avatar } from '@nextui-org/react';
import React from 'react';

export const Header: React.FC<{
  toggleNav: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleNav }) => {
  const { userDetails } = useStore((state) => state);

  const handleAction = (action: TOption) => {
    if (action.label === 'Logout') {
      localStorage.clear();
      window.location.reload();
    }
    return;
  };

  return (
    <header className="sticky top-0 z-50 flex h-[64px] w-full justify-between bg-white p-3">
      <button
        type="button"
        className="lg:invisible"
        onClick={() => toggleNav((cv) => !cv)}
      >
        {GetIcons('menu')}
      </button>
      <div className="ml-auto inline-flex gap-1">
        <Avatar classNames={{ base: 'block shrink-0' }} />
        <Menu
          title={userDetails?.first_name + ' ' + userDetails?.last_name}
          showLabel={false}
          options={headerMenuOptions}
          onSelectItem={handleAction}
        />
      </div>
    </header>
  );
};
export default Header;
