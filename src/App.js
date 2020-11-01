import "./App.css";
import { library } from "../node_modules/@fortawesome/fontawesome-svg-core";
import { fab } from "../node_modules/@fortawesome/free-brands-svg-icons";
import { fas } from "../node_modules/@fortawesome/free-solid-svg-icons";

import Navigation from "./components/Navigation/Navigation";
import Carou from "./components/Carou/Carou";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

library.add(fab, fas);

function App() {
  return (
    <div>
      <Navigation />
      <Carou />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
