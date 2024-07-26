import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  btnMode?: 'primary' | 'secondary';
}
const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button
      className="rounded-lg bg-green-500 px-3 py-2 text-sm font-medium text-white"
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
