import Link from "next/link";
import { useState } from "react";

import AuthService from "@/api/AuthService";

import { TOAST_MESSAGE_TYPE } from "@/components/Toast/model";

import {
  EMAIL_ERROR_CODE,
  EMAIL_ERROR_MESSAGE,
  EMAIL_REGEX,
  PASSWORD_ERROR_CODE,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX,
} from "@/core/constants/account.constants";
import useValidate from "@/core/hooks/useValidate";
import useToast from "@/core/hooks/useToast";

import SignLayout from "@/layouts/sign";

import { Flex } from "@/styles/common/flex.style";
import { BaseButtonStyles } from "@/styles/components/button.style";
import { BaseInputStyles } from "@/styles/components/input.style";

export default () => {
  const [emailErrorCode, setEmailErrorCode] = useState<EMAIL_ERROR_CODE | null>(null);
  const [passwordErrorCode, setPasswordErrorCode] = useState<PASSWORD_ERROR_CODE | null>(null);

  const [email, isInvalidEmail, setEmail] = useValidate(EMAIL_REGEX);
  const [password, isInvalidPassword, setPassword] = useValidate(PASSWORD_REGEX);

  const { createToast } = useToast();

  const validate = () => {
    let isValidate = true;

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

    return isValidate;
  };

  const handlerSignIn = async () => {
    if (!validate()) return;

    try {
      await AuthService.signIn({ email, password });
    } catch (error) {
      if (typeof error === "string") {
        switch (error as TOAST_MESSAGE_TYPE) {
          case "NOT_FOUND_USER":
            setEmailErrorCode("NOT_FOUND");
            break;
          case "INCORRECT_PASSWORD":
            setPasswordErrorCode("INCORRECT");
            break;
          default:
            createToast(error as TOAST_MESSAGE_TYPE);
            break;
        }
      }

      return;
    }

    createToast("SUCCESS_SIGN_IN");
  };

  return (
    <SignLayout>
      <Flex column className="form">
        <Flex column className="input-groups">
          {/* Email */}
          <Flex column className="input-group">
            <span css={{ fontSize: "16px" }}>이메일</span>
            <input type="email" placeholder="example@example.com" css={BaseInputStyles} />
          </Flex>

          {/* Password */}
          <Flex column className="input-group">
            <span css={{ fontSize: "16px" }}>비밀번호</span>
            <input type="password" placeholder="Password" css={BaseInputStyles} />
          </Flex>
        </Flex>

        <Flex className="button-groups">
          <button css={BaseButtonStyles} onClick={handlerSignIn}>
            로그인
          </button>
        </Flex>
      </Flex>

      <Flex justifyContent="center" className="link-groups">
        <Link href="/sign-up">계정이 존재하지 않습니다.</Link>
      </Flex>
    </SignLayout>
  );
};
