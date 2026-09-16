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
    // console.log("After auth:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  // Handling failed requests
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const response = await AxiosInstance.post("/token/refresh/", {
          refresh: refreshToken,
        });
        console.log("New Response: ",response.data.access);
        localStorage.setItem("accessToken", response.data.access);
        originalRequest.headers["Authorization"] =
          `Bearer ${response.data.access}`;
        return AxiosInstance(originalRequest);
      } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default AxiosInstance;
