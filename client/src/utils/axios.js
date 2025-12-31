import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://airbnb-backend-qf96.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;