import { AxiosRequestConfig } from "axios";

import axios from "@/core/utils/axios.util";

import { AuthSignInRequest, AuthSignInResponse, AuthSignUpRequest, AuthSignUpResponse } from "./model/auth.model";

const signUp = (data: AuthSignUpRequest) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/auth/sign-up",
    data,
  };

  return axios.request<AuthSignUpResponse>(config);
};

const signIn = (data: AuthSignInRequest) => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/auth/sign-in",
    data,
  };

  return axios.request<AuthSignInResponse>(config);
};

export default {
  signUp,
  signIn,
};
