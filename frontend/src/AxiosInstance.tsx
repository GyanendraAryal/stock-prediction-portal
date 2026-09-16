import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;
const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Request Interceptor
AxiosInstance.interceptors.request.use(
  (config) => {
    // console.log("Config: ", config);
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log("After auth:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
