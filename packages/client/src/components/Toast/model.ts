export type ToastType = "INFO" | "SUCCESS" | "WARNING" | "ERROR";
export type DEFAULT_TOAST_MESSAGE_TYPE = "FAILED_REQUEST";
export type SIGN_UP_TOAST_MESSAGE_TYPE = "SUCCESS_SIGN_UP" | "ALREADY_EMAIL" | "ALREADY_NICKNAME";
export type SIGN_IN_TOAST_MESSAGE_TYPE = "SUCCESS_SIGN_IN" | "NOT_FOUND_USER" | "INCORRECT_PASSWORD";
export type TOAST_MESSAGE_TYPE = DEFAULT_TOAST_MESSAGE_TYPE | SIGN_UP_TOAST_MESSAGE_TYPE | SIGN_IN_TOAST_MESSAGE_TYPE;

export interface ToastData {
  type: ToastType;
  message: string;
}

export type ToastMessageData = {
  [key in TOAST_MESSAGE_TYPE]?: ToastData;
};
