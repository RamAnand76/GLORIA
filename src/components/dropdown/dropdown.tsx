import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
interface MenuProps {
  title: string;
  options: React.ReactNode[];
}
const Menu: React.FC<MenuProps> = ({ title, options }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">{title}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {options.map((option, index) => (
          <DropdownItem key={index}>{option}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Menu;
