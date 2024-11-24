import { FC, forwardRef, InputHTMLAttributes, useState } from "react";
import { cva, VariantProps } from "cva";
import { cn } from "@/common/lib/cn";
import FileIcon, { fileName } from "./FileIcon";
import { locale, localized_string } from "../../lib/localized";
import Tag from "./Tag";

const display_data: {
  drop_your_files_text: localized_string;
  bold_word: localized_string;
} = {
  drop_your_files_text: { en: "Drop your files here, or " },
  bold_word: { en: "browse" },
};

const FileInputVariants = cva("border border-dashed  relative", {
  variants: {
    theme: {
      dark: "",
      light: "",
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

interface FileInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof FileInputVariants> {
  fileIcons: fileName[];
  locale?: locale;
  subtext: string;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      locale = "en",
      subtext,
      fileIcons,
      className,
      onChange,
      type,
      theme,
      ...props
    },
    ref,
  ) => {
    const [files, setFiles] = useState<FileList | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event);
      if (event.target.files) {
        setFiles(event.target.files);
      }
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <>
        <div
          className={cn(
            "border border-dashed border-primary-400 relative rounded-xl py-4 flex flex-col gap-1",
            className,
          )}
        >
          <input
            multiple
            type={"file"}
            onChange={handleFileChange}
            className="cursor-pointer absolute block opacity-0 w-full h-full z-50"
            ref={ref}
            {...props}
          />
          <div className="flex flex-row mx-auto w-fit">
            {fileIcons.map((file, idx) => (
              <FileIcon
                theme={theme ? theme : undefined}
                fileName={file}
                key={idx}
              />
            ))}
          </div>
          <div className="text-center top-0 right-0 left-0 m-auto text-primary-600">
            <p>
              {display_data.drop_your_files_text[locale]}
              <span className={"font-bold"}>
                {display_data.bold_word[locale]}
              </span>
            </p>
            <p className="text-subtext ">{subtext}</p>
          </div>
        </div>
        {files && files.length > 0 && (
          <ul className="list-none flex flex-row gap-x-4">
            {Array.from(files).map((file, index) => (
              <li key={index}>
                <Tag>{file.name}</Tag>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  },
);

FileInput.displayName = "FileInput";

export default FileInput;
