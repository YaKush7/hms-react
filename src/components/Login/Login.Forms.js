import { Alert, Button, Col, Form, FormGroup, Input, Label, Card, CardBody } from "reactstrap";
import "./Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Staff = (props) => {
  var Echeck;
  if (props.msg.errMsg === "") Echeck = true;
  else Echeck = false;

  var Lcheck;
  if (props.msg.loadingMsg === "") Lcheck = true;
  else Lcheck = false;

  return (
    <>
      <Card id="cust-cont">
        <CardBody>
          <Form className="pt-4" method="post" onSubmit={props.handle_submit}>
            <FormGroup row>
              <Label for="s_id" sm={{ size: 2, offset: 1 }}>
                Staff ID:
              </Label>
              <Col sm="8">
                <Input required type="number" id="s_id" name="s_id" placeholder="Staff ID" value={props.state.s_id} onChange={props.handle_change} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="s_pass" sm={{ size: 2, offset: 1 }}>
                Password:
              </Label>
              <Col sm="8">
                <Input required type="password" id="s_pass" name="s_pass" placeholder="Password" value={props.state.s_pass} onChange={props.handle_change} />
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
                      <Input type="radio" name="role" id="doctor" value="doctor" onChange={props.handle_change} /> Doctor
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="role" id="reception" value="reception" defaultChecked onChange={props.handle_change} /> Receptionist
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="role" id="admin" value="admin" onChange={props.handle_change} /> Admin
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
        </CardBody>
      </Card>
      {Echeck ? (
        <></>
      ) : (
        <Alert id="alert" color="danger">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          {` ${props.msg.errMsg}`}
        </Alert>
      )}
      {Lcheck ? (
        <></>
      ) : (
        <Alert id="alert" color="warning">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          {` ${props.msg.loadingMsg}`}
        </Alert>
      )}
    </>
  );
};

const Patient = (props) => {
  var Echeck;
  if (props.msg.errMsg === "") Echeck = true;
  else Echeck = false;

  var Lcheck;
  if (props.msg.loadingMsg === "") Lcheck = true;
  else Lcheck = false;

  return (
    <>
      <Card id="cust-cont">
        <CardBody>
          <Form className="pt-4" method="post" onSubmit={props.handle_submit}>
            <FormGroup row>
              <Label for="p_id" sm={{ size: 2, offset: 1 }}>
                Patient ID:
              </Label>
              <Col sm="8">
                <Input required type="number" id="p_id" name="p_id" placeholder="Patient ID" value={props.state.p_id} onChange={props.handle_change} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="p_pass" sm={{ size: 2, offset: 1 }}>
                Password:
              </Label>
              <Col sm="8">
                <Input required type="password" id="p_pass" name="p_pass" placeholder="Password" value={props.state.p_pass} onChange={props.handle_change} />
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
        </CardBody>
      </Card>
      {Echeck ? (
        <></>
      ) : (
        <Alert id="alert" color="danger">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          {` ${props.msg.errMsg}`}
        </Alert>
      )}
      {Lcheck ? (
        <></>
      ) : (
        <Alert id="alert" color="warning">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} />
          {` ${props.msg.loadingMsg}`}
        </Alert>
      )}
    </>
  );
};

export { Staff, Patient };
