import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import "./Login.css";

//helper

const SLForm = () => {
  const [state, setState] = useState({
    s_id: "",
    s_pass: "",
    role: "rep",
  });

  const handle_change = (props) => {
    setState((prevState) => ({ ...prevState, [props.target.name]: props.target.value }));
  };

  const handle_submit = (props) => {
    props.preventDefault();
    console.log(state);
  };

  return (
    <Form className="pt-4" method="post" onSubmit={handle_submit}>
      <FormGroup row>
        <Label for="s_id" sm={{ size: 2, offset: 1 }}>
          Staff ID:
        </Label>
        <Col sm="8">
          <Input required type="number" id="s_id" name="s_id" placeholder="Staff ID" value={state.s_id} onChange={handle_change} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="s_pass" sm={{ size: 2, offset: 1 }}>
          Password:
        </Label>
        <Col sm="8">
          <Input required type="password" id="s_pass" name="s_pass" placeholder="Password" value={state.s_pass} onChange={handle_change} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="role" sm={{ size: 2, offset: 1 }}>
          Role:
        </Label>
        <Col sm="8">
          <Col sm="8">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="role" id="doctor" value="doc" onChange={handle_change} /> Doctor
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="role" id="reception" value="rep" defaultChecked onChange={handle_change} /> Receptionist
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="role" id="admin" value="adm" onChange={handle_change} /> Admin
              </Label>
            </FormGroup>
          </Col>
        </Col>
      </FormGroup>
      <FormGroup row className="text-center">
        <Col xs="12">
          <Button color="primary" className="rounded-pill">
            Sign In
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

const PLForm = () => {
  const [state, setState] = useState({
    p_id: "",
    p_pass: "",
  });

  const handle_change = (props) => {
    setState((prevState) => ({ ...prevState, [props.target.name]: props.target.value }));
  };

  const handle_submit = (props) => {
    props.preventDefault();
    console.log(state);
  };

  return (
    <Form className="pt-4" method="post" onSubmit={handle_submit}>
      <FormGroup row>
        <Label for="p_id" sm={{ size: 2, offset: 1 }}>
          Patient ID:
        </Label>
        <Col sm="8">
          <Input required type="number" id="p_id" name="p_id" placeholder="Patient ID" value={state.p_id} onChange={handle_change} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="p_pass" sm={{ size: 2, offset: 1 }}>
          Password:
        </Label>
        <Col sm="8">
          <Input required type="password" id="p_pass" name="p_pass" placeholder="Password" value={state.p_pass} onChange={handle_change} />
        </Col>
      </FormGroup>
      <FormGroup row className="text-center">
        <Col xs="12">
          <Button color="primary" className="rounded-pill">
            Sign In
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export { SLForm, PLForm };
