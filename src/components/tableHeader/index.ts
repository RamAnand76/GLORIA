import { FilterProps } from '@/components/filter';
export { default } from './tableHeader';
export interface TableHeaderProps extends FilterProps {
  btnLabel: string;
  showFilter?: boolean;
  isSearchable?: boolean;
  showActions?: boolean;
  isBtnDisabled?: boolean;
  handleHeaderAction?: (action: TOption) => void;
  onBtnClick: React.MouseEventHandler<HTMLButtonElement>;
}
