import { Btn } from "./components/ui";
import "./index.css";
import { toast } from "./lib/myToast";

function App() {
  return (
    <main className="  relative left-0 flex flex-wrap gap-4  p-4">
      <Btn onClick={() => toast({ message: "default" })}>default</Btn>
      <Btn
        variant="fill.success"
        onClick={() => toast.success({ message: "success" })}
      >
        success
      </Btn>
      <Btn
        variant="fill.alert"
        onClick={() => toast.error({ message: "error" })}
      >
        error
      </Btn>
      <Btn variant="fill.info" onClick={() => toast.info({ message: "info" })}>
        info
      </Btn>
      <Btn variant="fill.warn" onClick={() => toast.warn({ message: "warn" })}>
        warn
      </Btn>
    </main>
  );
}

export default App;
