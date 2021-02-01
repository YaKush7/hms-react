import "./DashboardUI.css";

const Prescription = () => {
  return (
    <>
      <div className="text-danger">No Prescription Available!</div>
      <div className="col-md-12">
        <table className="table">
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
            <tr>
              <th scope="row">-</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">-</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Prescription;
