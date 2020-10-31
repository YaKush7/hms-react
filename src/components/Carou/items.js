import i1 from "./images/Hospital.png";
import i2 from "./images/Doctors.png";
import i3 from "./images/Ambulance.png";
import i4 from "./images/Medicines.png";
import i5 from "./images/prescription.png";
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
    head: "Doctor's Login Portal",
    text: (
      <Button color="primary" className="mt-2">
        Coming Soon!
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
