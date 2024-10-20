import Button from '@/components/button';
import Menu from '@/components/dropdown';
import Input from '@/components/input';
import { tableHeaderOptions } from '@/utils/constants';
import React, { memo } from 'react';
import { TableHeaderProps } from '.';
import Filter from '../filter';

const TableHeader: React.FC<TableHeaderProps> = ({
  btnLabel,
  isSearchable = false,
  showFilter = false,
  showActions = false,
  isBtnDisabled = false,
  onBtnClick,
  handleHeaderAction,
  ...rest
}) => {
  // console.log(onBtnClick, 'lll');

  return (
    <div className="bg-white rounded-[14px] p-2 flex items-center justify-between h-14 ">
      {isSearchable && (
        <Input
          placeholder="Search Here"
          className="w-auto md:w-60 h-10"
          showError={false}
        />
      )}
      <div className="flex items-center gap-2 ml-auto">
        {showFilter && <Filter {...rest} />}
        <Button
          label={btnLabel}
          color="primary"
          onClick={(e) => !isBtnDisabled && onBtnClick(e)}
          isDisabled={isBtnDisabled}
        />
        {showActions && (
          <Menu
            title={'Actions'}
            showLabel={false}
            menuClass="!w-fit"
            //@ts-ignore
            options={tableHeaderOptions}
            isKebabMenu={true}
            containerClass="!w-fit"
            //@ts-ignore
            onSelectItem={handleHeaderAction}
          />
        )}
      </div>
    </div>
  );
};

export default memo(TableHeader);
