import { Editor } from "./components/Editor";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";

function App() {
  const [html, setHtml] = useLocalStorage({ key: "html", defaultValue: "" });
  const [css, setCss] = useLocalStorage({ key: "css", defaultValue: "" });
  const [js, setJs] = useLocalStorage({ key: "js", defaultValue: "" });
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <main className=" h-svh  text-neutral ">
      <div className="  flex  items-center gap-1 bg-neutral-revert ">
        <Editor
          key="xml"
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          key="css"
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          key="javascript"
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </main>
  );
}

export default App;
