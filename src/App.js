import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./components/Home/Home"));
const Error = lazy(() => import("./components/Error/Error"));
const Login = lazy(() => import("./components/Login/Login"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/staff_login" render={() => <Login loc="staff" />} />
          <Route path="/patient_login" render={() => <Login loc="patient" />} />
          <Route path="/patient_dashboard" render={() => <Dashboard loc="patient" data={null} />} />
          <Route path="/staff_dashboard" render={() => <Dashboard loc="staff" data={null} />} />
          <Route path="/404_not_found" component={Error} />
          <Redirect exact to="/404_not_found" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
