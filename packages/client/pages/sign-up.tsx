import Link from "next/link";
import { useState } from "react";

import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common-input";

import {
  EMAIL_ERROR_CODE,
  EMAIL_ERROR_MESSAGE,
  EMAIL_REGEX,
  NAME_ERROR_CODE,
  NAME_ERROR_MESSAGE,
  NAME_REGEX,
  NICKNAME_ERROR_CODE,
  NICKNAME_ERROR_MESSAGE,
  NICKNAME_REGEX,
  PASSWORD_CONFIRM_ERROR_CODE,
  PASSWORD_CONFIRM_ERROR_MESSAGE,
  PASSWORD_ERROR_CODE,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX,
} from "@/core/constants/account.constants";
import useToast from "@/core/hooks/useToast";
import useValidate from "@/core/hooks/useValidate";

import SignLayout from "@/layouts/sign";

import { FlexStyles } from "@/styles/common/flex.style";
import axios from "@/core/utils/axios.util";

export default () => {
  const [nameErrorCode, setNameErrorCode] = useState<NAME_ERROR_CODE | null>(null);
  const [nicknameErrorCode, setNicknameErrorCode] = useState<NICKNAME_ERROR_CODE | null>(null);
  const [emailErrorCode, setEmailErrorCode] = useState<EMAIL_ERROR_CODE | null>(null);
  const [passwordErrorCode, setPasswordErrorCode] = useState<PASSWORD_ERROR_CODE | null>(null);
  const [passwordConfirmErrorCode, setPasswordConfirmErrorCode] = useState<PASSWORD_CONFIRM_ERROR_CODE | null>(null);

  const [name, isInvalidName, setName] = useValidate(NAME_REGEX);
  const [nickname, isInvalidNickname, setNickname] = useValidate(NICKNAME_REGEX);
  const [email, isInvalidEmail, setEmail] = useValidate(EMAIL_REGEX);
  const [password, isInvalidPassword, setPassword] = useValidate(PASSWORD_REGEX);
  const [passwordConfirm, isInvalidPasswordConfirm, setPasswordConfirm] = useValidate(PASSWORD_REGEX);

  const { createToast } = useToast();

  const validate = () => {
    let isValidate = true;

    if (isInvalidName) {
      setNameErrorCode("INVALID");
      isValidate = false;
    } else {
      setNameErrorCode(null);
    }

    if (isInvalidNickname) {
      setNicknameErrorCode("INVALID");
      isValidate = false;
    } else {
      setNicknameErrorCode(null);
    }

    if (isInvalidEmail) {
      setEmailErrorCode("INVALID");
      isValidate = false;
    } else {
      setEmailErrorCode(null);
    }

    if (isInvalidPassword) {
      setPasswordErrorCode("INVALID");
      isValidate = false;
    } else {
      setPasswordErrorCode(null);
    }

    if (isInvalidPasswordConfirm) {
      setPasswordConfirmErrorCode("INVALID");
      isValidate = false;
    } else if (password !== passwordConfirm) {
      setPasswordConfirmErrorCode("INCORRECT");
      isValidate = false;
    } else {
      setPasswordConfirmErrorCode(null);
    }

    return isValidate;
  };

  const handlerSignUp = async () => {
    axios;
    if (!validate()) return;

    try {
      // console.log(await axios.post("/api/auth/sign-up"));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SignLayout>
      <FlexStyles column className="form">
        <FlexStyles column className="input-groups">
          <CommonInput
            title="이름"
            placeholder="Name"
            value={name}
            text={nameErrorCode && NAME_ERROR_MESSAGE[nameErrorCode]}
            isError={nameErrorCode !== null}
            onChange={(e) => setName(e.target.value)}
            onEnter={handlerSignUp}
          />

          <CommonInput
            title="닉네임"
            placeholder="Nickname"
            value={nickname}
            text={nicknameErrorCode && NICKNAME_ERROR_MESSAGE[nicknameErrorCode]}
            isError={nicknameErrorCode !== null}
            onChange={(e) => setNickname(e.target.value)}
            onEnter={handlerSignUp}
          />

          <CommonInput
            title="이메일"
            placeholder="Email"
            value={email}
            text={emailErrorCode && EMAIL_ERROR_MESSAGE[emailErrorCode]}
            isError={emailErrorCode !== null}
            onChange={(e) => setEmail(e.target.value)}
            onEnter={handlerSignUp}
          />

          <CommonInput
            type="password"
            title="비밀번호"
            placeholder="Password"
            value={password}
            text={passwordErrorCode && PASSWORD_ERROR_MESSAGE[passwordErrorCode]}
            isError={passwordErrorCode !== null}
            onChange={(e) => setPassword(e.target.value)}
            onEnter={handlerSignUp}
          />

          <CommonInput
            type="password"
            title="비밀번호 확인"
            placeholder="Password Confirm"
            value={passwordConfirm}
            text={passwordConfirmErrorCode && PASSWORD_CONFIRM_ERROR_MESSAGE[passwordConfirmErrorCode]}
            isError={passwordConfirmErrorCode !== null}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onEnter={handlerSignUp}
          />
        </FlexStyles>

        <FlexStyles className="button-groups">
          <CommonButton onClick={handlerSignUp}>회원가입</CommonButton>
        </FlexStyles>
      </FlexStyles>

      <FlexStyles justifyContent="center" className="link-groups">
        <Link href="/sign-in">이미 계정이 있습니다.</Link>
      </FlexStyles>
    </SignLayout>
  );
};
