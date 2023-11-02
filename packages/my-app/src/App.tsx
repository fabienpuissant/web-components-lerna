import "./App.css";
import {
  FabButton,
  defineCustomElements,
} from "fab-web-components-react";

defineCustomElements();

function App() {

  const onClick = () => {
    console.log("ok")
  }

  return <FabButton label="button" primary rounded="medium" onClick={onClick}/>;
}

export default App;
