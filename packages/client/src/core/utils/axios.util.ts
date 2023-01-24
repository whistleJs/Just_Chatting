import axios, { AxiosError, HttpStatusCode } from "axios";

import { getProdOrOther } from "./core.util";

import { AxiosErrorResponseData } from "@/core/model/axios.model";

const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 1000 * 30;
axiosInstance.defaults.baseURL = getProdOrOther<string, string>("http://localhost:3001/api", "/api");
axiosInstance.defaults.headers["Content-Type"] = "application/json";

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error(error);

    throw "FAILED_REQUEST";
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

    if (reject.response.status === HttpStatusCode.InternalServerError) {
      throw "SERVER_ERROR";
    }

    throw reject.response.data.message || reject.response.data.statusCode;
  }
);

export default axiosInstance;
