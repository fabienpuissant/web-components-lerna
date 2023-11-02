import "./App.css";
import { FabButton } from "fab-web-components-react";

function App() {
  const onClick = () => {
    console.log("ok");
  };

  return (
    <FabButton label="button" primary rounded="medium" onClick={onClick} />
  );
}

export default App;
