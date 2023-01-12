import Link from "next/link";
import { useState } from "react";

import AuthService from "@/api/AuthService";

import Button from "@/components/Button";
import Input from "@/components/Input";
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
          <Input
            title="이메일"
            placeholder="example@example.com"
            value={email}
            text={emailErrorCode && EMAIL_ERROR_MESSAGE[emailErrorCode]}
            isError={emailErrorCode !== null}
            onChange={(e) => setEmail(e.target.value)}
            onEnter={handlerSignIn}
          />

          <Input
            type="password"
            title="비밀번호"
            placeholder="Password"
            value={password}
            text={passwordErrorCode && PASSWORD_ERROR_MESSAGE[passwordErrorCode]}
            isError={passwordErrorCode !== null}
            onChange={(e) => setPassword(e.target.value)}
            onEnter={handlerSignIn}
          />
        </Flex>

        <Flex className="button-groups">
          <Button onClick={handlerSignIn}>로그인</Button>
        </Flex>
      </Flex>

      <Flex justifyContent="center" className="link-groups">
        <Link href="/sign-up">계정이 존재하지 않습니다.</Link>
      </Flex>
    </SignLayout>
  );
};
