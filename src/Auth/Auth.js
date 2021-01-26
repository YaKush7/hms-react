import axios from "axios";

const ROOT_URL = window.location.href.split("/")[2].split(":")[0];
const API_AUTH_URL = `http://${ROOT_URL}:8080/api/auth/`;
const API_TEST_URL = `http://${ROOT_URL}:8080/api/test/`;

const login = async (send) => {
  const response = await axios.post(API_AUTH_URL + "signin", send);
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = async (send) => {
  const response = await axios.post(API_AUTH_URL + "signup", send);
  console.log(response.data);
  return response.data;
};

const getHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
};

const verifyUser = async () => {
  try {
    const response = await axios.get(API_TEST_URL + "user", { headers: getHeader() });
    return response;
  } catch (err) {
    return { data: err.response.data.msg, status: err.response.status };
  }
};

export { login, logout, register, verifyUser };
