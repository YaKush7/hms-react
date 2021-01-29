import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="fix">
      <Container>
        <Row>
          <Col size="12" className="text-center title mb-5 mt-4">
            <h1>Contact Us</h1>
            <hr></hr>
          </Col>
        </Row>
      </Container>
      <iframe title="loc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.3326332707416!2d78.07292901512345!3d30.398303081754904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d70603f128a5%3A0x359bb8f9c7797984!2sDIT%20University!5e0!3m2!1sen!2sin!4v1600617569122!5m2!1sen!2sin" className="cmap"></iframe>
      <Container className="my-5 text-center">
        <Row>
          <Col xs="12" lg="4">
            <CInfo />
          </Col>
          <Col xs="12" lg="8">
            <CForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

//helper;

const CInfo = () => {
  return (
    <div className="info">
      <div className="item">
        <i>
          <FontAwesomeIcon icon={["fas", "map"]} />
        </i>
        <h4 className="title font-weight-bold">Location:</h4>
        <p className="ctext">Mussoorie, Diversion Road, Makka Wala, Uttarakhand 248009</p>
      </div>
      <div className="item">
        <i>
          <FontAwesomeIcon icon={["fas", "envelope"]} />
        </i>
        <h4 className="title font-weight-bold">Email:</h4>
        <p className="ctext">contact.us@rays.med</p>
      </div>
      <div className="item">
        <i>
          <FontAwesomeIcon icon={["fas", "phone-alt"]} />
        </i>
        <h4 className="title font-weight-bold">Call:</h4>
        <p className="ctext">+91 XXX XXX XXXX</p>
      </div>
    </div>
  );
};

const CForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    msg: "",
    sub: "",
  });

  const handle_change = (props) => {
    setState((prevState) => ({ ...prevState, [props.target.name]: props.target.value }));
  };

  const handle_submit = (props) => {
    props.preventDefault();
    console.log(state);
  };

  return (
    <Form onSubmit={handle_submit} method="post" className="php-email-form">
      <Row form>
        <Col md="6">
          <FormGroup>
            <Input required type="text" className="inp" name="name" id="name" placeholder="Your Name" value={state.name} onChange={handle_change} />
            <div className="validate"></div>
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Input required type="email" className="inp" name="email" id="email" placeholder="Your Email" value={state.email} onChange={handle_change} />
            <div className="validate"></div>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input required type="text" className="inp" name="sub" id="subject" placeholder="Subject" value={state.sub} onChange={handle_change} />
        <div className="validate"></div>
      </FormGroup>
      <FormGroup>
        <Input required type="textarea" className="tarea" name="msg" rows="5" placeholder="Message" value={state.msg} onChange={handle_change} />
        <div className="validate"></div>
      </FormGroup>
      <div className="mb-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div className="text-center">
        <Button type="submit" id="sbt-button" className="ctext">
          Send Message
        </Button>
      </div>
    </Form>
  );
};
