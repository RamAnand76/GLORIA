import { Accordion as AccordionApp, AccordionItem } from '@nextui-org/react';
import React from 'react';

export interface AccordionAppProps {
  accOptions: {
    label: string;
    iterables: TOption[];
  }[];
  selectedItems: { [key: string]: string[] };
  setSelectedItems: (data: TOption) => void;
}
const Accordion: React.FC<AccordionAppProps> = ({
  accOptions,
  selectedItems = [],
  setSelectedItems,
}) => {
  return (
    <AccordionApp variant="bordered" className="bg-white">
      {accOptions.map(({ label, iterables }, index: number) => (
        <AccordionItem key={index} aria-label={label} title={label}>
          <div className="flex flex-wrap gap-2">
            {iterables.map(({ label: _label, value }, _index) => (
              <span
                key={_index}
                onClick={() => setSelectedItems({ label, value })}
                className={`p-2 text-base cursor-pointer rounded-full ${selectedItems?.[label]?.includes(value) ? 'bg-gray-400' : 'bg-gray-100'}`}
              >
                {_label}
              </span>
            ))}
          </div>
        </AccordionItem>
      ))}
    </AccordionApp>
  );
};

export default Accordion;
