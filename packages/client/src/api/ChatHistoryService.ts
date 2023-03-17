import { AxiosRequestConfig } from "axios";

import axios from "@/core/utils/axios.util";
import { ChatHistoryResponse } from "./model/chatHistory.model";

const findAll = () => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/chat-history",
  };

  return axios.request<ChatHistoryResponse[]>(config);
};

export default {
  findAll,
};
