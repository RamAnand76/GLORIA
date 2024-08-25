import GetIcons from '@/assets/icons';
import React, { useState } from 'react';
interface MenuProps {
  title: string;
  /**Make dropdown as a select component. default value-false */
  isSelectable?: boolean;
  selectedItem?: string;
  options: TOption[];
  showLabel?: boolean;
  label?: string;
  onSelectItem: (item: TOption) => void;
}
const Menu: React.FC<MenuProps> = ({
  title,
  options,
  label,
  selectedItem,
  isSelectable = false,
  showLabel = true,
  onSelectItem,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      {showLabel && <span className="mb-2 block text-small">{label}</span>}
      <button
        className="flex h-10 w-full items-center justify-between rounded-xl bg-default-100 px-3"
        onClick={() => setShowMenu((cv) => !cv)}
      >
        {isSelectable ? selectedItem : title}
        <span className="">{GetIcons('downArrow')}</span>
      </button>

      <ul
        aria-label="Static Actions"
        className={`absolute w-full origin-top transition-all duration-300 ease-in-out${
          showMenu ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
        style={{ transformOrigin: 'top' }}
      >
        {options.map((option, index) => (
          <li key={index} onClick={() => onSelectItem(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
