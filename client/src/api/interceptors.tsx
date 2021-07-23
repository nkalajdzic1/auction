import axios from "axios";
import { refreshAccessToken } from "./auth";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshAccessToken().then((res) => {
        if (res.status === 201) {
          localStorage.setItem("accessToken", res.data.accessToken);

          axios.defaults.headers.common["authorization"] =
            "Bearer " + res.data.accessToken;

          return axios(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
