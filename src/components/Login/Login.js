import axios from "axios";
import { useState } from "react";
import { Staff, Patient } from "./Forms";
import "./Forms.css";

const login = (API_URL, send) => {
  return axios.post(API_URL, send).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    }
    return response.data;
  });
};

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

  return <Staff state={state} handle_change={handle_change} handle_submit={handle_submit} />;
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

    const API_URL = "http://localhost:8080/api/auth/signin";
    const send = {
      id: state.p_id,
      password: state.p_pass,
    };
    login(API_URL, send).then(
      () => {
        console.log("go ahead");
      },
      (err) => {
        const errmsg = (err.response && err.response.data && err.response.data) || err.message || err.toString();
        console.log(errmsg);
      }
    );
  };

  return <Patient state={state} handle_change={handle_change} handle_submit={handle_submit} />;
};

export { SLForm, PLForm };
