import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/medical-logo.png";
import "./Navigation.css";

import staff from "./images/staff.png";
import patient from "./images/Patients.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="lg">
        <img alt="logo" src={logo} href="#home" className="logo"></img>
        <NavbarBrand href="/" className="text-decoration-none title">
          RAYS <span className="text-danger font-weight-bold">Hospitals</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-center">
          <Nav className="mr-auto" navbar>
            <Menu toggle={toggle} />
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

const Menu = (props) => {
  return (
    <>
      <NavItem>
        <NavLink href="#home" id="mitem" onClick={props.toggle}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#features" id="mitem" onClick={props.toggle}>
          Features
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#about" id="mitem" onClick={props.toggle}>
          About Us
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact" id="mitem" onClick={props.toggle}>
          Contact Us
        </NavLink>
      </NavItem>
    </>
  );
};

const Menu2 = () => {
  return (
    <>
      <Modals buttonLabel="Login" />
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

const Modals = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="secondary" onClick={toggle}>
        {props.buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="title" centered>
        <ModalHeader toggle={toggle}>Choose the login type</ModalHeader>
        <ModalBody>
          <Container className="text-center">
            <Row>
              <Col size="6">
                <img src={patient} alt="patients" className="m-img" />
              </Col>
              <Col size="6">
                <img src={staff} alt="patients" className="m-img" />
              </Col>
            </Row>
            <Row>
              <Col size="6">
                <Link to="/patient_login" className="btn btn-success">
                  Patients
                </Link>
              </Col>
              <Col size="6">
                <Link to="/staff_login" className="btn btn-danger">
                  Staff
                </Link>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};
