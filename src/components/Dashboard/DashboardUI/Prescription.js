import { useEffect, useState } from "react";
import { getData } from "../../../Auth/Auth";
import loader from "../../../assets/loader.svg";
import "./DashboardUI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Prescription = () => {
  const [data, setData] = useState({
    records: [],
    status: null,
  });

  useEffect(() => {
    getData().then((response) => {
      setData({ records: response.data.records.data, status: response.status });
    });
  }, []);

  if (data.status === 200) {
    return <PrescriptionView records={data.records} />;
  }

  return (
    <div id="root">
      <div className="divLoader">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
};

const PrescriptionView = (props) => {
  if (props.records.length === 0) return <div className="text-danger">No Prescription Available!</div>;
  else
    return (
      <>
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
              {props.records.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a href={item.prescription} style={{ textDecoration: "none" }}>
                        <FontAwesomeIcon icon={["fas", "file-medical"]} /> Download
                      </a>
                    </td>
                    <td>{item.doc_name}</td>
                    <td>{item.date.slice(0, 10)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Prescription;
