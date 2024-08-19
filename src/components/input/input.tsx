import { Input, InputProps } from '@nextui-org/react';
import React from 'react';

const InputComp: React.FC<InputProps> = ({ ...props }) => {
  return <Input className={`h-10 ${props.className}`} {...props} />;
};

export default InputComp;
