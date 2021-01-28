import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getHeader, verifyUser } from "../../Auth/Auth";
import loader from "../../assets/loader.svg";

const Dashboard = (props) => {
  const [state, setState] = useState({
    msg: "",
    status: null,
    uid: null,
    urole: null,
    data: null,
  });

  useEffect(() => {
    const temp = getHeader().role;
    console.log(temp, props.loc);
    if ((props.loc === "staff" && (temp === "admin" || temp === "reception" || temp === "doctor")) || props.loc === temp) {
      verifyUser({ ...props }).then((response) => {
        console.log(response);
        setState({ uid: response.data.uid, urole: response.data.urole, msg: response.data.msg, status: response.status, data: response.data.data._doc });
      });
    } else {
      setState({ status: 401 });
    }
  }, [props]);

  if (state.status === 200) {
    return (
      <>
        Logged in : {JSON.stringify(state, null, 1)}
        <br />
        From : {props.loc}
        <br />
        DATA : {JSON.stringify(state.data, null, 2)}
      </>
    );
  }

  if (state.status === 401 || state.status === 403) {
    console.log(state.msg);
    if (props.loc === "staff") {
      return <Redirect to="/staff_login" />;
    } else {
      return <Redirect to="/patient_login" />;
    }
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

export default Dashboard;
