import { TOAST_MESSAGE_TYPE } from "@/components/Toast/model";

export interface AxiosErrorResponseData {
  error: string;
  message: TOAST_MESSAGE_TYPE;
  statusCode: number;
}
