import axios from 'axios';
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://airbnb-backend-qf96.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;