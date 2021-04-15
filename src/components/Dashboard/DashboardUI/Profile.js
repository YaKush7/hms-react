import "./DashboardUI.css";

const Profile = ({ user }) => {
  return (
    <>
      <div className="profile-tab">
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
            <p>{user.dob.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
