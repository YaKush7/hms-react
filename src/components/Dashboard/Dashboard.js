import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getHeader, verifyUser } from "../../Auth/Auth";
import loader from "../../assets/loader.svg";

const Dashboard = () => {
  const [state, setState] = useState({
    msg: "",
    status: null,
    uid: null,
    urole: null,
    data: null,
  });

  useEffect(() => {
    verifyUser().then((response) => {
      if (getHeader().role === "patient") setState({ uid: response.data.uid, urole: response.data.urole, msg: response.data.msg, status: response.status, data: response.data.data._doc });
      else setState({ status: 401 });
    });
  }, []);

  if (state.status === 200) {
    return (
      <>
        Logged in : {JSON.stringify(state, null, 1)}
        <br />
        <br />
        DATA : {JSON.stringify(state.data, null, 2)}
      </>
    );
  }

  if (state.status === 401 || state.status === 403) {
    console.log(state.msg);
    return <Redirect to="/patient_login" />;
  }

  if (state.status === -1) {
    return <>{state.msg}</>;
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
