import i1 from "./images/Hospital.webp";
import i2 from "./images/Doctors.webp";
import i3 from "./images/Ambulance.webp";
import i4 from "./images/Medicines.webp";
import i5 from "./images/prescription.webp";

import Modals from "../Modals/Modals";
import { Button } from "reactstrap";

const items = [
  {
    src: i1,
    alt: "hospital",
    head: "Welcome To Hospital Management System!",
    text: "A Project By Group 56",
  },
  {
    src: i2,
    alt: "doctors",
    head: "Staff/Patient Login Portal",
    //text: <Modals buttonLabel="Click Here!" boutline={false} bcolor="primary" cname="mt-2" />,
    text: (
      <Button color="primary" className="mt-2">
        Choose Your Role!
      </Button>
    ),
  },
  {
    src: i3,
    alt: "ambulance",
    head: "Live Ambulance Tracker",
    text: (
      <Button color="primary" className="mt-2">
        Coming Soon!
      </Button>
    ),
  },
  {
    src: i4,
    alt: "medicine",
    head: "Online Medicine Booking",
    text: (
      <Button color="primary" className="mt-2">
        Coming Soon!
      </Button>
    ),
  },
  {
    src: i5,
    alt: "prescription",
    head: "E-Prescription for Patients",
    text: (
      <Button color="primary" className="mt-2">
        Coming Soon!
      </Button>
    ),
  },
];

export default items;
