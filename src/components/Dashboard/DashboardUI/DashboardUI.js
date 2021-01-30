import './DashboardUI.css';
import {logout} from '../../../Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import logo from "./assets/medical-logo.png";
import {Navbar, NavbarBrand} from 'reactstrap';

const DashboardUI = (data) => {
  const user = JSON.parse(data);
    return(
      <>
      {/*<h3>Name : {user.name}</h3>
      <h3>DOB : {user.dob}</h3>
      <h3>Address : {user.address}</h3>
      <h3>Gender : {user.gender}</h3>
      <h3>Contact No : {user.phone}</h3>
      <h3>Email ID : {user.email}</h3>*/}

       <div>
       <Navbar color="white" light expand="lg">
        <img alt="logo" src={logo} href="#home" className="logo"></img>
        <NavbarBrand href="/" className="text-decoration-none title nounderline">
          RAYS <span className="text-danger font-weight-bold">Hospitals</span>
        </NavbarBrand>
        </Navbar>
        <div className="container emp-profile">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={user.img_path} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h3>
                    {user.name}
                  </h3>
                  <h6>
                   {user.address}
                  </h6>
                  <p className="visit">Last Visited: <span>{user.lvisit.slice(0,10)}</span></p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="prescription-tab" data-toggle="tab" href="#prescription" role="tab" aria-controls="profile" aria-selected="false">Prescriptions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <button className="profile-edit-btn" onClick={logout} name="btnAddMore">Logout</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Helpful Links</p>
                  <a href='/'>Homepage</a><br />
                  <a href>Ambulance Tracker</a><br />
                  <a href="/#about">About Us</a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Patient Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.gender}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.phone}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Date of Birth</label>
                      </div>
                      <div className="col-md-6">
                        <p>{user.dob.slice(0,10)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="prescription" role="tabpanel" aria-labelledby="prescription-tab">
                  <div class="text-danger">No Prescription Available!</div>
                  <div className='col-10'>
                  <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">SNo</th>
                      <th scope="col">Precription</th>
                      <th scope="col">Doctor</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">-</th>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                  </div>
                </div>
              </div>
            </div>          
        </div>
      </div>

      </> 
    )
};

export default DashboardUI;