import axios from "axios";
// import Cookies from "js-cookie";

let token: string | null = "";

// token = Cookies.get("awaHealthUSr_token") || "";

export const getToken: any = () => (token ? token : null);

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    Authorization: getAuthorizationHeader(),
    Accept: "application/json",
  },
});

// interceptor for http
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const completeError = {
      ...error.response?.data,
      status: error.response?.status,
    };
    return Promise.reject(completeError);
  },
);

export const updateToken = (newToken: string | null) => {
  token = newToken;
  axiosInstance.defaults.headers.Authorization = `Bearer ${newToken}`;
};

export default axiosInstance;
