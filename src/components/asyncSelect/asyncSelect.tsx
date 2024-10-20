import { AsyncPaginate, AsyncPaginateProps } from 'react-select-async-paginate';
import { GroupBase } from 'react-select';

interface OptionType {
  label: string;
  value: string;
}

interface AsyncSelectProps
  extends AsyncPaginateProps<
    OptionType,
    GroupBase<OptionType>,
    unknown,
    false
  > {
  label: string;
}

const AsyncSelect: React.FC<AsyncSelectProps> = ({ label, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id} className="capitalize mb-[5px] block text-sm">
        {label}
      </label>
      <AsyncPaginate
        {...props}
        classNames={{
          control: () => '!border-0 !rounded-lg',
          placeholder: () => '!text-base',
        }}
      />
    </div>
  );
};

export default AsyncSelect;
