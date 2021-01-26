import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { verifyUser } from "../../Auth/Auth";
import loader from "../../assets/loader.svg";

const Dashboard = () => {
  const [state, setState] = useState({
    msg: "",
    status: null,
  });

  useEffect(() => {
    verifyUser().then((rep) => {
      setState({ msg: rep.data, status: rep.status });
    });
  }, []);

  if (state.status === 200) {
    return <>Logged in : {state.msg}</>;
  }

  if (state.status === 401 || state.status === 403) {
    console.log(state.msg);
    return <Redirect to="/patient_login" />;
  }

  return (
    <div id="root">
      <div class="divLoader">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
};

export default Dashboard;
