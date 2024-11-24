"use client";
import { FC, useEffect, useRef, useState } from "react";
import { Field, Tab } from "@headlessui/react";
import Markdown from "../ui/Markdown";
import InputSubtext from "../ui/InputSubtext";
import Textfield from "../ui/Textfield";
import { locale, localized_string } from "../../lib/localized";
import Switch from "./Switch";
import MathpixModal from "./MathpixModal";
import Label from "../ui/Label";
import { cn } from "../../lib/cn";
import textfield from "../ui/Textfield";

interface MarkdownTextareaGroupProps {
  className?: string;
  name: string;
  label: string;
  subtext?: string;
  locale?: locale;
  value?: string;
  onChange?: (value: string) => void;
  onResize?: (x: number, y: number) => void;
  button_text?: string;
  preview_text?: string;
}

const MarkdownTextareaGroup: FC<MarkdownTextareaGroupProps> = ({
  className,
  locale = "en",
  name,
  label,
  onResize,
  subtext,
  value = "",
  onChange = () => {},
  preview_text,
}) => {
  const [preview, setPreview] = useState(false);
  const resizeRef = useRef<HTMLTextAreaElement | null>(null);
  const [minh, setMinH] = useState<number>();

  useEffect(() => {
    if (!resizeRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === resizeRef.current) {
          const { width, height } = entry.contentRect;
          if (onResize) {
            onResize(width, height);
          }
          setMinH(height);
          console.log(height);
        }
      }
    });

    resizeObserver.observe(resizeRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [onResize]);

  return (
    <Field
      data-preview={preview ? false : null}
      className={cn("group flex flex-col gap-1", className)}
    >
      <div className="order-2 flex flex-row justify-between items-center">
        <MathpixModal
          buttonVariants={{ variant: "tertiary", size: "sm" }}
          callback={async (mathpix_string) => onChange(value + mathpix_string)}
        />
        <Field className="flex flex-row gap-1.5 items-center">
          <Label>{preview_text ? preview_text : "preview"}</Label>
          <Switch
            on_callback={async () => setPreview(true)}
            off_callback={async () => setPreview(false)}
          />
        </Field>
      </div>
      <Textfield
        ref={resizeRef}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="order-3 group-data-[preview]:hidden min-h-10 h-full"
      ></Textfield>
      <Markdown
        className="w-full py-3 mb-1 h-fit shadow-500 min-h-10 hidden order-3 group-data-[preview]:block"
        rawText={value}
      />
      <Label className={"order-1"}>{label}</Label>
      <InputSubtext className="order-4 group-data-[preview]:hidden">
        {subtext}
      </InputSubtext>
    </Field>
  );
};

MarkdownTextareaGroup.displayName = "MarkdownTextareaGroup";

export default MarkdownTextareaGroup;
