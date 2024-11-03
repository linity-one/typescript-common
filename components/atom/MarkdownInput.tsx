"use client";
import { FC, useState } from "react";
import { Field, Tab } from "@headlessui/react";
import Markdown from "../ui/Markdown";
import InputSubtext from "../ui/InputSubtext";
import Textfield from "../ui/Textfield";
import { locale, localized_string } from "../../lib/localized";
import Switch from "./Switch";
import MathpixModal from "./MathpixModal";
import Label from "../ui/Label";

const display_data: {
  preview_text: localized_string;
  button_text: localized_string;
} = {
  button_text: { en: "create from Image" },
  preview_text: { en: "preview" },
};

interface MarkdownTextareaGroupProps {
  className?: string;
  name: string;
  label: string;
  subtext?: string;
  locale?: locale;
  value?: string;
  onChange?: (value: string) => void;
}

const MarkdownTextareaGroup: FC<MarkdownTextareaGroupProps> = ({
  locale = "en",
  name,
  label,
  subtext,
  value = "",
  onChange = () => {},
}) => {
  const [preview, setPreview] = useState(false);

  return (
    <Field
      data-preview={preview ? false : null}
      className="group flex flex-col gap-1.5"
    >
      <div className="order-2 flex flex-row justify-between items-center">
        <MathpixModal
          buttonVariants={{ variant: "tertiary", size: "sm" }}
          callback={async (mathpix_string) => onChange(value + mathpix_string)}
        />
        <Field className="flex flex-row gap-1.5 items-center">
          <Label>{display_data.preview_text[locale]}</Label>
          <Switch
            on_callback={async () => setPreview(true)}
            off_callback={async () => setPreview(false)}
          />
        </Field>
      </div>
      <Textfield
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="order-3 group-data-[preview]:hidden"
      ></Textfield>
      <Markdown
        className="w-full py-3 px-2 shadow-600 min-h-10 hidden order-3 group-data-[preview]:block"
        rawText={value}
      />
      <Label className={"order-1"}></Label>
      <InputSubtext className="order-4 group-data-[preview]:hidden">
        {subtext}
      </InputSubtext>
    </Field>
  );
};

MarkdownTextareaGroup.displayName = "MarkdownTextareaGroup";

export default MarkdownTextareaGroup;
