import axios, { AxiosError } from "axios";

import { getProdOrOther } from "./core.util";

import { AxiosErrorResponseData } from "@/core/model/axios.model";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = getProdOrOther<string, string>("http://localhost:3001/api", "/api");
axiosInstance.defaults.headers["Content-Type"] = "application/json";

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);

    throw error;
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (reject: AxiosError<AxiosErrorResponseData>) => {
    if (!reject.response || !reject.response.data) {
      throw "FAILED_REQUEST";
    }

    throw reject.response.data.message || reject.response.data.statusCode;
  }
);

export default axiosInstance;
