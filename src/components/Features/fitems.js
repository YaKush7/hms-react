import i1 from "./images/login.png";
import i2 from "./images/amb.png";
import i3 from "./images/phar.png";

import Modals from "../Modals/Modals";
import { Button } from "reactstrap";

const fitems = [
  {
    img: i1,
    ftext: "Login Portal",
    but: <Modals buttonLabel="Click Here!" boutline={false} bcolor="success" cname="rounded-pill" />,
    btext: "Login into the Patients, Doctors & Staff Accounts",
  },
  {
    img: i2,
    ftext: "Ambulane Tracker",
    but: (
      <Button color="success" className="rounded-pill">
        {"Click Here"}
      </Button>
    ),
    btext: "Live tracking of all the ambulances in your city.",
  },
  {
    img: i3,
    ftext: "Online Pharmacy",
    but: (
      <Button color="success" className="rounded-pill">
        {"Click Here"}
      </Button>
    ),
    btext: "Buy prescribed medicines from our trusted suppliers online.",
  },
];

export default fitems;
