import { TOAST_MESSAGE_TYPE } from "@/components/common-toast/model";

export interface AxiosErrorResponseData {
  error: string;
  message: TOAST_MESSAGE_TYPE;
  statusCode: number;
}
