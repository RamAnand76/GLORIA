export { default } from './filter';
export interface FilterProps {
  accOptions: {
    label: string;
    iterables: TOption[];
  }[];
  selectedItems: string[];
  setSelectedItems: (data: TOption) => void;
  reset: () => void;
  handleApplyButton: () => void;
}
