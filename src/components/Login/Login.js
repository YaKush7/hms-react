import { Card, CardBody } from "reactstrap";
import { SLForm, PLForm } from "./Login.helper";
import "./Forms.css";
import { useEffect, useState } from "react";
import { verifyUser } from "../../Auth/Auth";
import { Redirect } from "react-router-dom";

import loader from "../../assets/loader.svg";

const Login = () => {
  const [state, setState] = useState({
    msg: "",
    status: null,
  });

  useEffect(() => {
    verifyUser().then((rep) => {
      setState({ msg: rep.data, status: rep.status });
    });
  }, []);

  if (state.status === 401 || state.status === 403) {
    const URL = window.location.href.split("/")[3];
    if (URL === "staff_login") {
      return <SLogin />;
    } else {
      return <PLogin />;
    }
  }

  if (state.status === 200) {
    console.log("Redirecting");
    return <Redirect to="/patient_dashboard" />;
  }

  return (
    <div id="root">
      <div className="divLoader">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
};

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

export default Login;
