import Main from "./components/Main";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { SLogin, PLogin } from "./components/Login/Loginform";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/home" component={Main} />
        <Route path="/staff_login" component={SLogin} />
        <Route path="/patient_login" component={PLogin} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
