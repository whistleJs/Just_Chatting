export type ToastType = "INFO" | "SUCCESS" | "WARNING" | "ERROR";

export interface Toast {
  type: ToastType;
  title: string;
  text: string;
}
