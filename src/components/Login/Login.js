import { useState } from "react";
import { Staff, Patient } from "./Forms";
import { login } from "./Auth/Auth";
import "./Forms.css";

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

    const send = {
      id: state.p_id,
      password: state.p_pass,
    };
    login(send).then(
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
