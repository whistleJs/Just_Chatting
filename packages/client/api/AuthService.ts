import { AxiosRequestConfig } from "axios";

import axios from "@/core/utils/axios.util";

import { AuthSignUpRequest } from "./model/auth.model";

const signUp = (data: AuthSignUpRequest) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/auth/sign-up",
    data,
  };

  return axios.request(config);
};

export default {
  signUp,
};
