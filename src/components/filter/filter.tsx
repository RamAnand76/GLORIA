import GetIcons from '@/assets/icons';
import React, { useEffect, useRef, useState } from 'react';
import { FilterProps } from '.';
import Accordion from '../accordion';
import Button from '../button';

const Filter: React.FC<FilterProps> = ({
  accOptions,
  selectedItems,
  reset,
  setSelectedItems,
  handleApplyButton,
}) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="ml-auto mr-2 relative" ref={menuRef}>
      <button
        className="p-2 m-auto border-0 cursor-pointer bg-slate-300 rounded-lg"
        onClick={() => setOpenFilter((cv) => !cv)}
      >
        {selectedItems?.length > 0 && isFilterActive && (
          <span className="absolute text-xs top-[-5px] left-[-10px] text-white bg-red-600 rounded-full px-2 py-1">
            {selectedItems.length}
          </span>
        )}
        {GetIcons('filter')}
      </button>
      {openFilter && (
        <div className="bg-white flex flex-col gap-2 p-2 absolute z-50 right-0 w-72 mt-1 shadow-lg rounded-lg">
          <Accordion
            accOptions={accOptions}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />

          <footer className="bg-transparent px-3 py-2 flex items-center gap-2">
            <Button
              label="Reset"
              type="reset"
              color="danger"
              onClick={() => {
                reset();
                setIsFilterActive(false);
              }}
            />
            <Button
              label="Apply"
              type="submit"
              color="success"
              onClick={() => {
                setIsFilterActive(true);
                handleApplyButton();
                setOpenFilter(false);
              }}
            />
          </footer>
        </div>
      )}
    </div>
  );
};

export default Filter;
