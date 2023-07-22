import { BACKEND_URL, TOKEN } from "@/utils/constants";
import { getDataFromLocalStorage } from "@/utils/localStorage";
import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: `${BACKEND_URL}/api/v1`,
});

api.interceptors.request.use(function (request: InternalAxiosRequestConfig) {
  const token = getDataFromLocalStorage({
    key: TOKEN,
  });
  if (token && token.trim().length > 0) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      !window.location.pathname.startsWith("/auth") &&
      error?.response?.status === 401
    ) {
      window.location.replace("/auth");
    }
    return Promise.reject(error);
  }
);

export default api;
