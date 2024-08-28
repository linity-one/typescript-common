import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FC, useState } from "react";
import { InputWrapperVariants } from "../ui/InputWrapper";
import { VariantProps } from "cva";
import { CheckIcon, ChevronDownIcon } from "../ui/Icons";
import { cn } from "../../lib/cn";

interface ListboxProps extends VariantProps<typeof InputWrapperVariants> {
  listValues: string[];
  placeholderText?: string;
  name?: string;
  label?: string;
  subtext?: string;
}

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export const ListboxSelect: FC<ListboxProps> = ({
  name,
  placeholderText,
  variant,
}) => {
  const [selectedValue, setSelectedValue] = useState<{
    id: number;
    name: string;
  }>();
  const className = "gap-0";
  return (
    <Field>
      <Listbox name={name} onChange={setSelectedValue}>
        <div className={InputWrapperVariants({ variant, className })}>
          <Label className="mb-0.5 text-text font-body text-primary-600 data-[open]:text-primary-950">
            this is the label
          </Label>
          {/*data-[focus]*/}
          <ListboxButton className="items-center data-[invalid]:border-alert rounded-md data-[open]:rounded-b-none border border-primary-400 py-1 px-2 text-text text-primary-600 flex flex-row justify-between">
            <span className={selectedValue ? "text-primary-950" : ""}>
              {selectedValue
                ? selectedValue.name
                : placeholderText
                  ? placeholderText
                  : "select something"}
            </span>
            <ChevronDownIcon size={"default"} aria-hidden="true" />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={cn(
              "w-[var(--button-width)] bg-white [--anchor-gap:var(--spacing-1)] focus:outline-none",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
            )}
          >
            {people.map((person) => (
              <ListboxOption
                key={person.name}
                value={person}
                className="group flex cursor-default border-b border-l border-r  border-primary-400 px-2 py-1 last:rounded-b-md text-text text-primary-950 select-none data-[focus]:bg-primary-100"
              >
                <span className="w-full">{person.name}</span>
                <CheckIcon
                  size="default"
                  className="invisible group-data-[selected]:visible"
                />
              </ListboxOption>
            ))}
          </ListboxOptions>
          <span className="text-subtext text-primary-600">
            this is a subtext
          </span>
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
