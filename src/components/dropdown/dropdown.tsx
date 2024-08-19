import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  MenuItemProps,
} from '@nextui-org/react';
interface MenuProps extends MenuItemProps {
  title: string;
  options: React.ReactNode[];
  onSelectItem: (item: any) => void;
}
const Menu: React.FC<MenuProps> = ({
  title,
  options,
  onSelectItem,
  ...rest
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">{title}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {options.map((option, index) => (
          <DropdownItem
            key={index}
            {...rest}
            onPress={() => onSelectItem(option)}
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Menu;
