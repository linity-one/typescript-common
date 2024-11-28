import React, { FC } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { cn } from "../../lib/cn";

interface MarkdownEditorProps {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (newMarkdown: string) => void;
}

const MarkdownEditor: FC<MarkdownEditorProps> = ({
  className = "",
  value,
  onChange,
  placeholder = "Write your markdown here...",
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border-primary-300 border p-1 overflow-hidden",
        className,
      )}
    >
      <AceEditor
        className="w-full"
        placeholder={placeholder}
        style={{ width: "100%", height: "100%" }}
        mode="latex"
        theme="github"
        name="markdown_editor"
        onChange={onChange}
        fontSize={20}
        lineHeight={24}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={true}
        value={value}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
        }}
      />
    </div>
  );
};

export default MarkdownEditor;
