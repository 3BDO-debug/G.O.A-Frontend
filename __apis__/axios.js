import axios from "axios";

// 127.0.0.1:8000 https://goa.pythonanywhere.com

export const mainUrl = "https://goa.pythonanywhere.com";

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
