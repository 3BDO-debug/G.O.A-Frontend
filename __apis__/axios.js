import axios from "axios";

// 127.0.0.1:8000

export const mainUrl = "http://127.0.0.1:8000";

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
