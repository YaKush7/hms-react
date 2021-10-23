import { useState } from "react";
import { register } from "../../../Auth/Auth";
import "./DashboardUI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Col, Form, FormGroup, Input, Row } from "reactstrap";

const AddPatient = (props) => {
  const [state, setState] = useState({
    id: null,
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: null,
    address: "",
    role: "patient",
    password: "",
  });

  const [msg, setMsg] = useState({
    errMsg: "",
    loadingMsg: "",
  });

  var Echeck;
  if (msg.errMsg === "") Echeck = true;
  else Echeck = false;

  var Lcheck;
  if (msg.loadingMsg === "") Lcheck = true;
  else Lcheck = false;

  const handle_change = (props) => {
    setState((prevState) => ({ ...prevState, [props.target.name]: props.target.value, password: state.name + state.phone }));
  };

  const handle_submit = (props) => {
    setMsg({ errMsg: "", loadingMsg: "Please Wait" });
    props.preventDefault();
    console.log(state.password);
    register(state)
      .then((response) => {
        console.log(response);
        setMsg({ errMsg: "", loadingMsg: "Registration Successful" });
        setState({
          id: 0,
          name: "",
          dob: "",
          gender: "",
          email: "",
          phone: 0,
          address: "",
          role: "patient",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        setMsg({ errMsg: "Please Check", loadingMsg: "" });
      });
  };

  return (
    <>
      <div className="col-md-12">
        <Form onSubmit={handle_submit} method="post" className="php-email-form">
          <Row form>
            <Col md="3">
              <FormGroup>
                <Input required type="number" className="inp" name="id" id="id" placeholder="ID" value={state.id} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
            <Col md="9">
              <FormGroup>
                <Input required type="text" className="inp" name="name" id="name" placeholder="Name" value={state.name} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Input required type="text" className="inp" name="dob" id="dob" placeholder="DOB (YYYY-MM-DD)" value={state.dob} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input required type="text" className="inp" name="gender" id="gender" placeholder="Gender" value={state.gender} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Input required type="email" className="inp" name="email" id="email" placeholder="Email" value={state.email} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input required type="number" className="inp" name="phone" id="phone" placeholder="Phone" value={state.phone} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Input required type="textarea" className="tarea" name="address" rows="2" placeholder="Address" value={state.address} onChange={handle_change} />
            <div className="validate"></div>
          </FormGroup>
          <div className="mb-3"></div>
          <div className="text-center">
            <Button type="submit" id="sbt-button" className="ctext mb-3">
              Add patient
            </Button>
          </div>
        </Form>
      </div>
      {Echeck ? (
        <></>
      ) : (
        <Alert id="alert" color="danger">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          {` ${msg.errMsg}`}
        </Alert>
      )}
      {Lcheck ? (
        <></>
      ) : (
        <Alert id="alert" color="warning">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          {` ${msg.loadingMsg}`}
        </Alert>
      )}
    </>
  );
};

export default AddPatient;
