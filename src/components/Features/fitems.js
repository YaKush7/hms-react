import i1 from "./images/login.png";
import i2 from "./images/amb.png";
import i3 from "./images/phar.png";

import Modals from "../Modals/Modals";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fitems = [
  {
    id: 1,
    img: i1,
    ftext: "Login Portal",
    but: <Modals buttonLabel="Click Here!" boutline={false} bcolor="success" cname="rounded-pill" />,
    btext: "Login into the Patients, Doctors & Staff Accounts",
  },
  {
    id: 2,
    img: i2,
    ftext: "Ambulane Tracker",
    but: (
      <Button color="success" className="rounded-pill">
        {"Soon "}
        <FontAwesomeIcon icon={["fas", "clock"]} />
      </Button>
    ),
    btext: "Live tracking of all the ambulances in your city.",
  },
  {
    id: 3,
    img: i3,
    ftext: "Online Pharmacy",
    but: (
      <Button color="success" className="rounded-pill">
        {"Soon "}
        <FontAwesomeIcon icon={["fas", "clock"]} />
      </Button>
    ),
    btext: "Buy prescribed medicines from our trusted suppliers online.",
  },
];

export default fitems;
