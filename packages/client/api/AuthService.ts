import { AxiosRequestConfig } from "axios";

import axios from "@/core/utils/axios.util";

export default {
  signUp: async (data: any) => {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/auth/sign-up",
      data,
    };

    return axios.request(config);
  },
};
