import {
  Field,
  Label,
  Listbox as HeadlessListbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FC, useState } from "react";
import { InputWrapperVariants } from "../ui/InputWrapper";
import { VariantProps } from "cva";

interface ListboxProps extends VariantProps<typeof InputWrapperVariants> {
  listValues: string[];
  placeholderText?: string;
  name?: string;
  label?: string;
  subtext?: string;
}

const Listbox: FC<ListboxProps> = ({
  label,
  subtext,
  name,
  variant,
  listValues,
  placeholderText,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>();
  const className = 'gap-0'
  return (
    <Field>
      <HeadlessListbox name={name} onChange={setSelectedValue}>
          <div className={InputWrapperVariants({ variant,className})}>
        <Label className='mb-0.5 text-text font-body text-primary-600 data-[open]:text-gunmetal-950'>{label}</Label>
        <ListboxButton className="data-[invalid]:border-alert rounded-md data-[open]:rounded-b-none border border-primary-400 py-1 px-2 text-text text-primary-600 flex flex-row gap-0.5 ">
          <span className={selectedValue ? "text-primary-950" : ""}>
            {selectedValue
              ? selectedValue
              : placeholderText
                ? placeholderText
                : "select something"}
          </span>
        </ListboxButton>
        <div className="relative h-0 overflow-visible mb-0.5">
          <ListboxOptions
            modal={false}
            className="absolute w-full order-2 overflow-visible bg-white "
          >
            {listValues.map((value, index) => (
              <ListboxOption
                  className='data-[open]:text-alert border-b border-l border-r  border-primary-400 px-2 py-1 last:rounded-b-md text-text text-primary-950'
                  key={index} value={value}>
                {value}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
              <span className='text-subtext text-primary-600'>{subtext}</span>
          </div>
      </HeadlessListbox>
    </Field>
  );
};

export default Listbox;
