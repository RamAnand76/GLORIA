import { ButtonProps as BaseButtonProps, Button } from '@nextui-org/react';
import React from 'react';
interface ButtonProps extends BaseButtonProps {
  label: string;
}
const ButtonComp: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <Button
      className={`font-semibold text-white h-9 rounded-[20px] ${rest.className}`}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default ButtonComp;
