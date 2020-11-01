import Main from "./components/Main";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { SLogin, PLogin } from "./components/Login/Loginform";

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/staff_login" component={SLogin} />
        <Route path="/patient_login" component={PLogin} />
        <Redirect exact to="/" />
      </Switch>
    </HashRouter>
  );
};

export default App;
