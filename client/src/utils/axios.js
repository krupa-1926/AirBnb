import axios from 'axios';
axios.defaults.withCredentials = true;


const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://airbnb-backend-qf96.onrender.com/api",
  withCredentials: true,
});

// 🔥 Attach token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
