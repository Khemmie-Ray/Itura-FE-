import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://itura-backend-ng6nl.ondigitalocean.app/api/v1/",
    headers: {
      "Content-Type": "application/json",
    },
  });


export default axiosInstance;