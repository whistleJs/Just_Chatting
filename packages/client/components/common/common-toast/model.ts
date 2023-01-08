export type ToastType = "INFO" | "SUCCESS" | "WARNING" | "ERROR";

export interface Toast {
  type: ToastType;
  text: string;
}
