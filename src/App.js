import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Carou from "./components/Carou/Carou";

import { library } from "../node_modules/@fortawesome/fontawesome-svg-core";
import { fab } from "../node_modules/@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <>
      <Navigation />
      <Carou />
    </>
  );
}

export default App;
