export type ToastType = "INFO" | "SUCCESS" | "WARNING" | "ERROR";
export type DEFAULT_TOAST_TYPE = "FAILED_REQUEST";
export type ACCOUNT_TOAST_TYPE =
  | "SUCCESS_SIGN_UP"
  | "ALREADY_EMAIL"
  | "ALREADY_NICKNAME"
  | "NOT_FOUND_USER"
  | "INCORRECT_PASSWORD";
export type TOAST_TYPE = DEFAULT_TOAST_TYPE | ACCOUNT_TOAST_TYPE;

export interface ToastData {
  type: ToastType;
  message: string;
}

export type ToastMessageData = {
  [key in TOAST_TYPE]?: ToastData;
};
