import {
  Listbox as HeadlessListbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { FC, useState } from 'react';

interface ListboxProps {
  listValues: string[];
  placeholderText?: string;
  name?: string;
}

const Listbox: FC<ListboxProps> = ({ listValues, placeholderText }) => {
  const [selectedValue, setSelectedValue] = useState<string>();
  return (
    <HeadlessListbox onChange={setSelectedValue}>
      <ListboxButton className="peer order-2 rounded-md border border-primary-400 py-1 px-2 text-text text-primary-600 flex flex-row gap-0.5">
        <span className={selectedValue ? 'text-primary-950' : ''}>
          {selectedValue
            ? selectedValue
            : placeholderText
              ? placeholderText
              : 'select something'}
        </span>
      </ListboxButton>
      <ListboxOptions className="relative">
        {listValues.map((value, index) => (
          <ListboxOption key={index} value={value}>
            {value}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HeadlessListbox>
  );
};

export default Listbox;
