import { cn } from "../lib/cva";
import { Btn, Icon } from "./ui";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror, { type ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { useState } from "react";

type EditorProps = ReactCodeMirrorProps & {
  displayName: string;
};
export function Editor({ displayName, className, ...props }: EditorProps) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn(` flex-1 `, {
        " grow-[2]   ": open,
        className,
      })}
    >
      <div className="p- flex items-center justify-between px-2 py-1">
        {displayName}
        <Btn variant="ghost" onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {open ? (
            <Icon.collapse className=" rotate-90 text-xl font-bold" />
          ) : (
            <Icon.expand />
          )}
        </Btn>
      </div>
      <CodeMirror
        className={cn("[&_.cm-content]:max-w-[300px]", {
          " [&_.cm-content]:absolute [&_.cm-content]:!overflow-hidden ": !open,
        })}
        theme={okaidia}
        {...props}
      />
    </div>
  );
}
