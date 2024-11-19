import {
  Field,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import { FC, useState } from "react";
import { InputWrapperVariants } from "../ui/InputWrapper";
import { VariantProps } from "cva";
import { CheckIcon, ChevronDownIcon } from "../ui/Icons";
import { cn } from "../../lib/cn";
import Label from "../ui/Label";
import InputSubtext from "../ui/InputSubtext";

interface ListboxProps extends VariantProps<typeof InputWrapperVariants> {
  listValues: string[];
  placeholderText?: string;
  name?: string;
  label?: string;
  subtext?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  theme?: "light" | "dark";
}

export const ListboxSelect: FC<ListboxProps> = ({
  name,
  label,
  subtext,
  placeholderText,
  variant,
  listValues,
  value,
  disabled,
  onChange,
  theme = "dark",
}) => {
  const className = "gap-0";
  return (
    <Field>
      <Listbox name={name} value={value} onChange={onChange}>
        <div className={InputWrapperVariants({ variant, className })}>
          <ListboxButton
            disabled={disabled || listValues.length == 0}
            className="peer order-2 items-center data-[invalid]:border-alert rounded-md data-[open]:rounded-b-none border border-primary-400 py-1 px-2 text-text text-primary-600 flex flex-row justify-between bg-white"
          >
            <span className={value ? "text-primary-950" : ""}>
              {value ||
                (placeholderText ? placeholderText : "select something")}
            </span>
            <ChevronDownIcon
              className={disabled || listValues.length == 0 ? "hidden" : ""}
              size={"default"}
              aria-hidden="true"
            />
          </ListboxButton>
          <Label theme={theme}>{label}</Label>
            <InputSubtext theme={theme}>{subtext}</InputSubtext>
          <ListboxOptions
            anchor="bottom"
            transition
            className={cn(
              "w-[var(--button-width)] bg-white [--anchor-gap:var(--spacing-1)] focus:outline-none",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
            )}
          >
            {listValues.map((listValue) => (
              <ListboxOption
                key={listValue}
                value={listValue}
                className="group flex cursor-default border-b border-l border-r  border-primary-400 px-2 py-1 last:rounded-b-md text-text text-primary-950 select-none data-[focus]:bg-primary-100"
              >
                <span className="w-full">{listValue}</span>
                <CheckIcon
                  size="default"
                  className="invisible group-data-[selected]:visible"
                />
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
  );
};

/*
const ListboxSelect: FC<ListboxProps> = ({
  label,
  subtext,
  name,
  variant,
  listValues,
  placeholderText,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>();
  const className = "gap-0";
  return (
    <Field>
      <Listbox name={name} onChange={setSelectedValue}>
        <div className={InputWrapperVariants({ variant, className })}>
          <Label className="mb-0.5 text-text font-body text-primary-600 data-[open]:text-gunmetal-950">
            {label}
          </Label>
          <ListboxButton className="items-center data-[invalid]:border-alert rounded-md data-[open]:rounded-b-none border border-primary-400 py-1 px-2 text-text text-primary-600 flex flex-row justify-between">
            <span className={selectedValue ? "text-primary-950" : ""}>
              {selectedValue
                ? selectedValue
                : placeholderText
                  ? placeholderText
                  : "select something"}
            </span>
              <ChevronDownIcon size='default' />
          </ListboxButton>
          <div className="relative h-0 overflow-visible mb-0.5">
            <ListboxOptions
              className=" w-full -top-0.5 overflow-visible bg-white "
            >
              {listValues.map((value, index) => (
                <ListboxOption
                  className="data-[open]:text-alert border-b border-l border-r  border-primary-400 px-2 py-1 last:rounded-b-md text-text text-primary-950"
                  key={index}
                  value={value}

                >
                  {value}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
          <span className="text-subtext text-primary-600">{subtext}</span>
        </div>
      </Listbox>
    </Field>
  );
};
*/
export default ListboxSelect;
