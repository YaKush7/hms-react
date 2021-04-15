import axios from "axios";

const ROOT_URL = window.location.href.split("/")[2].split(":")[0];
const API_AUTH_URL = `http://${ROOT_URL}:8080/api/auth/`;
const API_TEST_URL = `http://${ROOT_URL}:8080/api/test/`;

const login = (send) => {
  return axios.post(API_AUTH_URL + "signin", send).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

const register = (send) => {
  return axios.post(API_AUTH_URL + "signup", send).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const getHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken, role: user.role };
  } else {
    return {};
  }
};

const verifyUser = (props) => {
  return axios
    .get(API_TEST_URL + props.loc, { headers: getHeader() })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return { data: { msg: err.response.data.msg }, status: err.response.status };
      } else {
        return { data: { msg: "Connection Error" }, status: -1 };
      }
    });
};

const getData = () => {
  return axios
    .get(API_TEST_URL + "patientdata", { headers: getHeader() })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      if (err.response) {
        return { data: { msg: err.response.data.msg }, status: err.response.status };
      } else {
        return { data: { msg: "Connection Error" }, status: -1 };
      }
    });
};

const appoint = (send) => {
  return axios
    .post(API_TEST_URL + "appointment", send)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export { login, logout, register, verifyUser, getHeader, getData, appoint };
