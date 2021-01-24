import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const login = (send) => {
  return axios.post(API_URL + "signin", send).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data);
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = (send) => {
  return axios.post(API_URL + "signup", send).then((response) => {
    console.log(response.data);
  });
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export { login, logout, register, getUser };
