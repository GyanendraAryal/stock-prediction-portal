import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;
const AxiosInstance = axios.create({
  baseURL: baseURL,
});

export default AxiosInstance
