export const NAME_REGEX = "^[a-zA-Z가-힣 ]{2,16}$";
export const NICKNAME_REGEX = "^[a-zA-Z가-힣0-9 ]{2,20}$";
export const EMAIL_REGEX = "^[a-zA-Z0-9-_]+@[a-z-]+\\.[a-z]{2,3}$";
export const PASSWORD_REGEX = "^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\\-_])[\\da-zA-Z!@#$%^&*()\\-_]{8,16}$";

export const NAME_ERROR_MESSAGE = {
  INVALID: "이름 형식이 유효하지 않습니다.",
};
export const NICKNAME_ERROR_MESSAGE = {
  INVALID: "닉네임 형식이 유효하지 않습니다.",
  DUPLICATE: "이미 존재하는 닉네임입니다.",
};
export const EMAIL_ERROR_MESSAGE = {
  INVALID: "이메일 형식이 유효하지 않습니다.",
  DUPLICATE: "이미 존재하는 이메일입니다.",
  NOT_FOUND: "존재하지 않는 이메일입니다.",
};
export const PASSWORD_ERROR_MESSAGE = {
  INVALID: "비밀번호 형식이 유효하지 않습니다.",
};
export const PASSWORD_CONFIRM_ERROR_MESSAGE = {
  INVALID: "비밀번호 형식이 유효하지 않습니다.",
  INCORRECT: "비밀번호가 일치하지 않습니다.",
};

export type NAME_ERROR_CODE = keyof typeof NAME_ERROR_MESSAGE;
export type NICKNAME_ERROR_CODE = keyof typeof NICKNAME_ERROR_MESSAGE;
export type EMAIL_ERROR_CODE = keyof typeof EMAIL_ERROR_MESSAGE;
export type PASSWORD_ERROR_CODE = keyof typeof PASSWORD_ERROR_MESSAGE;
export type PASSWORD_CONFIRM_ERROR_CODE = keyof typeof PASSWORD_CONFIRM_ERROR_MESSAGE;
