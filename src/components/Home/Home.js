import Navigation from "../Navigation/Navigation";
import Carou from "./Carou/Carou";
import Features from "./Features/Features";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "../Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

function Main() {
  return (
    <div>
      <Navigation />
      <Carou />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
