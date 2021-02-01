import "./DashboardUI.css";
import { logout } from "../../../Auth/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/medical-logo.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Navbar from "react-bootstrap/Navbar";
import Prescription from "./Prescription";
import Profile from "./Profile";
import Footer from "../../Footer/Footer";

const DashboardUI = ({ data }) => {
  const user = JSON.parse(data);
  return (
    <>
      {/*<h3>Name : {user.name}</h3>
      <h3>DOB : {user.dob}</h3>
      <h3>Address : {user.address}</h3>
      <h3>Gender : {user.gender}</h3>
      <h3>Contact No : {user.phone}</h3>
      <h3>Email ID : {user.email}</h3>*/}

      <div>
        <Navbar>
          <Navbar.Brand href="#home">
            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
            <a href="/" className="text-decoration-none title nounderline">
              RAYS <span className="text-danger font-weight-bold">Hospitals</span>
            </a>
          </Navbar.Brand>
        </Navbar>

        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={user.img_path} alt="" />
              </div>
              <div className="profile-work">
                <p>Helpful Links</p>
                <a href="/">Homepage</a>
                <br />
                <a href="#Progress">Ambulance Tracker</a>
                <br />
                <a href="/#about">About Us</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h3>{user.name}</h3>
                <h6>{user.address}</h6>
                <p className="visit">
                  Last Visited: <span>{user.lvisit.slice(0, 10)}</span>
                </p>
              </div>

              <div className="col-md-12">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="tab-content">
                  <Tab eventKey="profile" title="Profile" className="tab-content">
                    <Profile user={user} />
                  </Tab>
                  <Tab eventKey="prescription" className="tab-pane fade precription-tab" title="Prescriptions">
                    <Prescription />
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="col-md-2">
              <button className="profile-logout-btn" onClick={logout} name="btnAddMore">
                Logout
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DashboardUI;
