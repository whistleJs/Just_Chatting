export const FADE_IN_TIMES = 0.5 * 1000;
export const FADE_OUT_TIMES = 0.5 * 1000;
export const SHOW_TIMES = 5 * 1000;

export const TOTAL_ANIMATE_TIMES = FADE_IN_TIMES + FADE_OUT_TIMES + SHOW_TIMES;

export const TOAST_MESSAGES = {
  TEST: "테스트 토스트입니다.",
};

export type TOAST_MESSAGE_TYPE = keyof typeof TOAST_MESSAGES;
