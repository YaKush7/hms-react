import Main from "./components/Main";
import { Switch, Route, Redirect, HashRouter, BrowserRouter } from "react-router-dom";
import { SLogin, PLogin } from "./components/Login/Loginform";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/staff_login" component={SLogin} />
        <Route path="/patient_login" component={PLogin} />
        <Redirect exact to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
