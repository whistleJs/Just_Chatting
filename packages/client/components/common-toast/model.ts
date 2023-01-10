import { TOAST_MESSAGE_TYPE } from "./constants";

export type ToastType = "INFO" | "SUCCESS" | "WARNING" | "ERROR";

export interface Toast {
  type: ToastType;
  message: TOAST_MESSAGE_TYPE;
}
