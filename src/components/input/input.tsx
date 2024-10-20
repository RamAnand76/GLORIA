import { InputProps, Input as InputComp } from '@nextui-org/react';
import React from 'react';

interface InputComponentProps extends InputProps {
  showError?: boolean;
  errorText?: string | undefined;
  containerClass?: string;
}
const Input: React.FC<InputComponentProps> = ({
  isInvalid,
  errorText,
  showError = true,
  containerClass,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 ${containerClass}`}>
      <InputComp
        className={`h-10 ${props.className}`}
        {...props}
        isInvalid={isInvalid}
        classNames={{ label: 'capitalize' }}
      />
      {showError && (
        <div className="text-xs text-danger h-4 px-2">
          {isInvalid ? errorText : ''}
        </div>
      )}
    </div>
  );
};

export default Input;
