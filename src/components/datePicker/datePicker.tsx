import { DatePicker as App, DatePickerProps } from '@nextui-org/react';

const DatePicker: React.FC<DatePickerProps> = (props) => {
  return (
    <App
      label="Birth date"
      className="max-w-[284px]"
      labelPlacement="outside"
      {...props}
    />
  );
};

export default DatePicker;
