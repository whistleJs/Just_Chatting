import { ToastMessageData } from "@/components/common-toast/model";

export const FADE_IN_TIMES = 0.5 * 1000;
export const FADE_OUT_TIMES = 0.5 * 1000;
export const SHOW_TIMES = 5 * 1000;

export const TOTAL_ANIMATE_TIMES = FADE_IN_TIMES + FADE_OUT_TIMES + SHOW_TIMES;

export const TOAST_MESSAGES: ToastMessageData = {
  FAILED_REQUEST: {
    type: "ERROR",
    message: "서버 요청에 실패했습니다.",
  },
  SUCCESS_SIGN_UP: {
    type: "SUCCESS",
    message: "성공적으로 회원가입 되었습니다.",
  },
  ALREADY_EMAIL: {
    type: "ERROR",
    message: "이미 존재하는 이메일입니다.",
  },
  ALREADY_NICKNAME: {
    type: "ERROR",
    message: "이미 존재하는 닉네임입니다.",
  },
};
