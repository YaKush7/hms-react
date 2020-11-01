import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import "./Login.css";

//helper

const SLForm = () => {
  return (
    <>
      <Form className="pt-4" method="post" action="forms/staff_login.php">
        <FormGroup row>
          <Label for="s_id" sm={{ size: 2, offset: 1 }}>
            Staff ID:
          </Label>
          <Col sm="8">
            <Input required type="number" id="s_id" name="s_id" placeholder="Staff ID" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="s_pass" sm={{ size: 2, offset: 1 }}>
            Password:
          </Label>
          <Col sm="8">
            <Input required type="password" id="s_pass" name="s_pass" placeholder="Password" />
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
                  <Input type="radio" name="role" id="doctor" value="doc" /> Doctor
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="role" id="reception" value="rep" defaultChecked /> Receptionist
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="role" id="admin" value="adm" /> Admin
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
    </>
  );
};

const PLForm = () => {
  return (
    <>
      <Form className="pt-4" method="post" action="forms/patient_login.php">
        <FormGroup row>
          <Label for="p_id" sm={{ size: 2, offset: 1 }}>
            Patient ID:
          </Label>
          <Col sm="8">
            <Input required type="number" id="p_id" name="p_id" placeholder="Patient ID" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="p_pass" sm={{ size: 2, offset: 1 }}>
            Password:
          </Label>
          <Col sm="8">
            <Input required type="password" id="p_pass" name="p_pass" placeholder="Password" />
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
    </>
  );
};

export { SLForm, PLForm };
