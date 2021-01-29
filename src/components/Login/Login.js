import { SLForm, PLForm } from "./Login.helper";
import "./Forms.css";
import { useEffect, useState } from "react";
import { getHeader, verifyUser } from "../../Auth/Auth";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import loader from "../../assets/loader.svg";

const Login = (props) => {
  const [state, setState] = useState({
    msg: "",
    status: null,
  });

  useEffect(() => {
    const temp = getHeader().role;
    console.log(temp, props.loc);
    if ((props.loc === "staff" && (temp === "admin" || temp === "reception" || temp === "doctor")) || props.loc === temp) {
      verifyUser({ ...props }).then((rep) => {
        setState({ msg: rep.data.msg, status: rep.status });
      });
    } else {
      setState({ status: 401 });
    }
  }, [props]);

  if (state.status === 401 || state.status === 403) {
    if (props.loc === "staff") {
      return <SLogin />;
    } else {
      return <PLogin />;
    }
  }

  if (state.status === 200) {
    console.log("Redirecting");
    if (props.loc === "staff") return <Redirect to="/staff_dashboard" />;
    else return <Redirect to="/patient_dashboard" />;
  }

  if (state.status === -1) {
    return <Redirect to="/404_not_found" />;
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
      <Link className="p-3 noUnderline" to="/">
        <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} /> Back To Home{" "}
      </Link>
      <div className="area">
        <SLForm />
      </div>
    </div>
  );
};

const PLogin = () => {
  return (
    <div className="ctext">
      <div className="title_bar text-center bg-color text-white p-3 h1">Patient Login</div>
      <Link className="p-3 noUnderline" to="/">
        <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} /> Back To Home{" "}
      </Link>
      <div className="area">
        <PLForm />
      </div>
    </div>
  );
};

export default Login;
