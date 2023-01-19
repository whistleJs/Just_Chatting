import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import AuthService from "@/api/AuthService";

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
  PASSWORD_ERROR_CODE,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX,
} from "@/core/constants/account.constants";
import useToast from "@/core/hooks/useToast";
import useValidate from "@/core/hooks/useValidate";

import SignLayout from "@/layouts/sign";

import { Flex } from "@/styles/common/flex.style";
import { TOAST_MESSAGE_TYPE } from "@/components/Toast/model";
import { BaseButtonStyles } from "@/styles/components/button.style";
import { Input } from "@/styles/components/input.style";

export default () => {
  const router = useRouter();

  const [emailErrorCode, setEmailErrorCode] = useState<EMAIL_ERROR_CODE | null>(null);
  const [nicknameErrorCode, setNicknameErrorCode] = useState<NICKNAME_ERROR_CODE | null>(null);
  const [passwordErrorCode, setPasswordErrorCode] = useState<PASSWORD_ERROR_CODE | null>(null);
  const [passwordConfirmErrorCode, setPasswordConfirmErrorCode] = useState<PASSWORD_ERROR_CODE | null>(null);
  const [nameErrorCode, setNameErrorCode] = useState<NAME_ERROR_CODE | null>(null);

  const [email, isInvalidEmail, setEmail] = useValidate(EMAIL_REGEX);
  const [nickname, isInvalidNickname, setNickname] = useValidate(NICKNAME_REGEX);
  const [password, isInvalidPassword, setPassword] = useValidate(PASSWORD_REGEX);
  const [passwordConfirm, isInvalidPasswordConfirm, setPasswordConfirm] = useValidate(PASSWORD_REGEX);
  const [name, isInvalidName, setName] = useValidate(NAME_REGEX);

  const { createToast } = useToast();

  const validate = () => {
    let isValidate = true;

    if (isInvalidEmail) {
      setEmailErrorCode("INVALID");
      isValidate = false;
    } else {
      setEmailErrorCode(null);
    }

    if (isInvalidNickname) {
      setNicknameErrorCode("INVALID");
      isValidate = false;
    } else {
      setNicknameErrorCode(null);
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

    if (isInvalidName) {
      setNameErrorCode("INVALID");
      isValidate = false;
    } else {
      setNameErrorCode(null);
    }

    return isValidate;
  };

  const handlerSignUp = async () => {
    if (!validate()) return;

    try {
      await AuthService.signUp({ name, password, nickname, email });
    } catch (error) {
      if (typeof error === "string") {
        switch (error as TOAST_MESSAGE_TYPE) {
          case "ALREADY_EMAIL":
            setEmailErrorCode("DUPLICATE");
            break;
          case "ALREADY_NICKNAME":
            setNicknameErrorCode("DUPLICATE");
            break;
          default:
            createToast(error as TOAST_MESSAGE_TYPE);
            break;
        }
      }

      return;
    }

    router.push("/sign-in");

    createToast("SUCCESS_SIGN_UP");
  };

  return (
    <SignLayout>
      <Flex column className="form">
        <Flex column>
          {/* Email */}
          <Flex column className="input-group">
            <span>이메일</span>
            <Input type="email" placeholder="example@example.com" />
          </Flex>

          {/* Nickname */}
          <Flex column className="input-group">
            <span>닉네임</span>
            <Input type="text" placeholder="Nickname" />
          </Flex>

          {/* Nickname */}
          <Flex column className="input-group">
            <span>닉네임</span>
            <Input type="text" placeholder="Nickname" />
          </Flex>

          {/* Password */}
          <Flex column className="input-group">
            <span>비밀번호</span>
            <Input type="password" placeholder="Password" />
          </Flex>

          {/* Password Confirm */}
          <Flex column className="input-group">
            <span>비밀번호 확인</span>
            <Input type="password" placeholder="Password Confirm" />
          </Flex>

          {/* Name */}
          <Flex column className="input-group">
            <span>이름</span>
            <Input type="text" placeholder="Name" />
          </Flex>
        </Flex>

        <Flex className="button-groups">
          <button css={BaseButtonStyles} onClick={handlerSignUp}>
            회원가입
          </button>
        </Flex>
      </Flex>

      <Flex justifyContent="center" className="link-groups">
        <Link href="/sign-in">이미 계정이 있습니다.</Link>
      </Flex>
    </SignLayout>
  );
};
