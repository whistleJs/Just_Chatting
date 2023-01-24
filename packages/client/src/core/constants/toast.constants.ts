import { ToastMessageData } from "@/components/Toast/model";

export const TOAST_MESSAGES: ToastMessageData = {
  FAILED_REQUEST: {
    type: "ERROR",
    message: "서버 요청에 실패했습니다.",
  },
  /* 회원가입 */
  SUCCESS_SIGN_UP: {
    type: "SUCCESS",
    message: "성공적으로 회원가입 되었습니다.",
  },
};
