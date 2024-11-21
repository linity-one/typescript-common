import { Combobox, Description, Field, Label } from "@headlessui/react";
import { FC, useEffect, useRef, useState } from "react";
import { InputWrapperVariants } from "../ui/InputWrapper";
import { VariantProps } from "cva";
import Tag from "../ui/Tag";
import { cn } from "../../lib/cn";
import { CheckIcon } from "../ui/Icons";
import { InputVariants } from "../ui/Input";
import { infoToast } from "../toast/toast";

export interface AutocompleteFunctions<X> {
  autocompleteFunction: (input: string) => Promise<X[]>;
  renderFunction: (elm: X) => string;
}

interface ComboboxTagInputProps<X>
  extends VariantProps<typeof InputWrapperVariants> {
  autocompleteFunctions: AutocompleteFunctions<X>;
  className?: string;
  placeholderText?: string;
  name?: string;
  label?: string;
  subtext?: string;
  value?: X[];
  onChange?: (value: X[]) => void;
}

const ComboboxTagInput = <X,>({
  label,
  subtext,
  name,
  className,
  variant,
  placeholderText,
  autocompleteFunctions,
  value = [],
  onChange = () => {},
}: ComboboxTagInputProps<X>) => {
  const [query, setQuery] = useState("");
  const [dropdownItems, setDropdownItems] = useState<X[]>([]);
  const [selectedItems, setSelectedItems] = useState<X[]>(value);

  useEffect(() => {
    query === ""
      ? setDropdownItems([])
      : autocompleteFunctions.autocompleteFunction(query).then((val) => {
          setDropdownItems(val);
        });
  }, [query]);

  const removeIndexFromSelectedItems = (item: X) => {
    infoToast("removed item:" + autocompleteFunctions.renderFunction(item));
    const updatedItems = selectedItems.filter((val) => val !== item);
    setSelectedItems(updatedItems);
    onChange(updatedItems);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const selectOption = (el: X[]) => {
    const updatedItems = [
      ...selectedItems,
      ...el.filter((newItem) => !selectedItems.includes(newItem)),
    ];

    setSelectedItems(updatedItems);
    setQuery("");
    inputRef.current?.focus();
    onChange(updatedItems);
  };

  return (
    <Field id={name} className={className}>
      <Combobox
        name={name}
        value={selectedItems}
        onChange={selectOption}
        multiple
      >
        <div
          className={InputWrapperVariants({ variant, className: "min-h-17" })}
        >
          <Combobox.Input
            ref={inputRef}
            className={InputVariants({
              className: "data-[open]:rounded-b-none data-[open]:focus:ring-0 ",
            })}
            placeholder={placeholderText}
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          ></Combobox.Input>
          <Label
            className={
              "order-1 text-text text-primary-600 peer-focus:text-primary-950 data-[open]:text-primary-950"
            }
          >
            {label}
          </Label>
          <Combobox.Options
            anchor="bottom"
            className={cn(
              "w-[var(--input-width)] bg-white [--anchor-gap:var(--spacing-1)] focus:outline-none",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
            )}
          >
            {dropdownItems.map((val, idx) => (
              <Combobox.Option
                key={idx}
                value={val}
                className=" group flex items-center justify-between cursor-default border-b border-l border-r  border-primary-400 px-2 py-1 last:rounded-b-md text-text text-primary-950 select-none data-[focus]:bg-primary-100"
              >
                <span className={cn("text-primary-950 text-text")}>
                  {autocompleteFunctions.renderFunction(val)}
                </span>
                <CheckIcon
                  className={"invisible group-data-[selected]:visible"}
                  size="default"
                  aria-hidden="true"
                />
              </Combobox.Option>
            ))}
          </Combobox.Options>
          {selectedItems.length == 0 ? (
            <Description className="order-3 mt-0.5 font-body text-primary-600 text-subtext peer-focus:text-primary-950">
              {subtext}
            </Description>
          ) : (
            <div
              className={
                "flex mt-0.5 order-3 flex-row flex-wrap gap-x-4 gap-y-2 "
              }
            >
              {selectedItems.map((item, idx) => {
                return (
                  <Tag
                    key={autocompleteFunctions.renderFunction(item)}
                    closeCallback={() => removeIndexFromSelectedItems(item)}
                  >
                    {autocompleteFunctions.renderFunction(item)}
                  </Tag>
                );
              })}
            </div>
          )}
        </div>
      </Combobox>
    </Field>
  );
};

export default ComboboxTagInput;
