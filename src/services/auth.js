import axios from "axios";

const API_URL = "http://localhost:3000/users/";

const register = (username, password) => {
  return axios.post(API_URL + {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = (username, password) => {
    return axios.post(API_URL + {
      username,
      password,
    });
  };

const getCurrentUser = (username) => {
    return axios.post(API_URL + "me" +{
        username
          });};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};