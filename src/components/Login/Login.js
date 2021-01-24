import { Card, CardBody } from "reactstrap";
import { SLForm, PLForm } from "./Login.helper";
import "./Forms.css";

const SLogin = () => {
  return (
    <div className="ctext">
      <div className="title_bar text-center bg-color text-white p-3 h1">Staff Login</div>
      <div className="area">
        <Card id="cust-cont">
          <CardBody>
            <SLForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

const PLogin = () => {
  return (
    <div className="ctext">
      <div className="title_bar text-center bg-color text-white p-3 h1">Patient Login</div>
      <div className="area">
        <Card id="cust-cont">
          <CardBody>
            <PLForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { SLogin, PLogin };
