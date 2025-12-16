import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

export const setToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

// Auto-set token from localStorage on page load
const token = localStorage.getItem("token");
if (token) setToken(token);

export default api;
