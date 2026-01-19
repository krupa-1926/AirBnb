import axios from 'axios';
import { getItemFromLocalStorage } from '@/utils'
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://airbnb-backend-qf96.onrender.com/api",
  withCredentials: true,
});

// ✅ ADD THIS INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getItemFromLocalStorage('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
