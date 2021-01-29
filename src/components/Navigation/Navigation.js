import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modals from "../Home/Modals/Modals";
import logo from "./medical-logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="lg">
        <img alt="logo" src={logo} href="#home" className="logo"></img>
        <NavbarBrand href="/" className="text-decoration-none title nounderline">
          RAYS <span className="text-danger font-weight-bold">Hospitals</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-center">
          <Nav className="mr-auto" navbar>
            <Menu />
          </Nav>
          <Nav className="text-center" navbar>
            <Menu2 />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

//helper functions

const Menu = () => {
  return (
    <>
      <NavItem>
        <NavLink href="#home" id="mitem">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#features" id="mitem">
          Features
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#about" id="mitem">
          About Us
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact" id="mitem">
          Contact Us
        </NavLink>
      </NavItem>
    </>
  );
};

const Menu2 = () => {
  return (
    <>
      <Modals buttonLabel="Login" boutline={true} bcolor="secondary" />
      <NavItem>
        <NavLink href="#social" id="mitem">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} size="1x" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#social" id="mitem">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
        </NavLink>
      </NavItem>
    </>
  );
};
