import Home from "./components/Home/Home";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
//import Login from "./components/Login/Login";
import Error from "./components/Error";
import { SLogin, Login } from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/staff_login" render={() => <Login loc="staff" />} />
        <Route path="/patient_login" render={() => <Login loc="patient" />} />
        <Route path="/patient_dashboard" component={Dashboard} />
        <Route path="/404_not_found" component={Error} />
        <Redirect exact to="/404_not_foud" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
