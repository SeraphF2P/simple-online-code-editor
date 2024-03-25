import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import { cn } from "../lib/cva";
import { Btn, Icon } from "./ui";
import { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

type EditorProps = {
  language: string;
  value: string;
  displayName: string;
  onChange: (val: string) => void;
};
export function Editor({
  language,
  displayName,
  value,
  onChange,
}: EditorProps) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn(` flex-1`, {
        " grow-0  ": !open,
      })}
    >
      <div className="flex items-center justify-between p-1">
        {displayName}
        <Btn variant="ghost" onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {open ? (
            <Icon.collapse className=" rotate-90 text-xl font-bold" />
          ) : (
            <Icon.expand />
          )}
        </Btn>
      </div>
      <ControlledEditor
        onBeforeChange={(_editor, _data, value) => onChange(value)}
        value={value}
        className={cn("", {
          " [&_.CodeMirror-scroll]:absolute [&_.CodeMirror-scroll]:!overflow-hidden":
            !open,
        })}
        options={{
          lineWrapping: true,
          // lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
