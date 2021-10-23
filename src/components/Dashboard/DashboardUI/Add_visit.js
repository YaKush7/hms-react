import { useState } from "react";
import { setData } from "../../../Auth/Auth";
import "./DashboardUI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Col, Form, FormGroup, Input, Row } from "reactstrap";

const AddVisit = (props) => {
  const [state, setState] = useState({
    id: null,
    pat_name: "",
    doc_id: null,
    doc_name: "",
    date: "",
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
    setState((prevState) => ({ ...prevState, [props.target.name]: props.target.value }));
  };

  const handle_submit = (props) => {
    setMsg({ errMsg: "", loadingMsg: "Please Wait" });
    props.preventDefault();
    console.log(state);
    setData(state)
      .then((response) => {
        console.log(response);
        setMsg({ errMsg: "", loadingMsg: "Visit Saved" });
        setState({
          id: null,
          pat_name: "",
          doc_id: null,
          doc_name: "",
          date: "",
        });
      })
      .catch((err) => {
        console.log(err);
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
                <Input required type="text" className="inp" name="pat_name" id="pat_name" placeholder="Patient Name" value={state.pat_name} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="3">
              <FormGroup>
                <Input required type="number" className="inp" name="doc_id" id="doc_id" placeholder="ID" value={state.doc_id} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
            <Col md="9">
              <FormGroup>
                <Input required type="text" className="inp" name="doc_name" id="doc_name" placeholder="Doctor Name" value={state.doc_name} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="12">
              <FormGroup>
                <Input required type="text" className="inp" name="date" id="date" placeholder="Date (YYYY-MM-DD)" value={state.date} onChange={handle_change} />
                <div className="validate"></div>
              </FormGroup>
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" id="sbt-button" className="ctext mb-3">
              Add Visit
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

export default AddVisit;
