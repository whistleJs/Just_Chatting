import Link from "next/link";
import { useForm } from "react-hook-form";

import AuthService from "@/api/AuthService";
import { AuthSignInRequest } from "@/api/model/auth.model";

import { InputGroup } from "@/components/InputGroup";
import { TOAST_MESSAGE_TYPE } from "@/components/Toast/model";

import {
  EMAIL_ERROR_MESSAGE,
  EMAIL_REGEX,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX,
} from "@/core/constants/account.constants";
import useToast from "@/core/hooks/useToast";

import SignLayout from "@/layouts/sign";

import { Flex } from "@/styles/common/flex.style";
import { Button } from "@/styles/components/button.style";
import { Input } from "@/styles/components/input.style";
import { Form } from "@/styles/layouts/sign.style";

const SignInPage = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    setError,
  } = useForm<AuthSignInRequest>();

  const { createToast } = useToast();

  const onValid = async (request: AuthSignInRequest) => {
    try {
      await AuthService.signIn(request);
    } catch (error) {
      if (typeof error === "string") {
        switch (error as TOAST_MESSAGE_TYPE) {
          case "NOT_FOUND_USER":
            setError("email", { message: EMAIL_ERROR_MESSAGE.NOT_FOUND });
            return;
          case "INCORRECT_PASSWORD":
            setError("password", { message: PASSWORD_ERROR_MESSAGE.INCORRECT });
            return;
          default:
            createToast(error as TOAST_MESSAGE_TYPE);
            return;
        }
      }
    }

    createToast("SUCCESS_SIGN_IN");
  };

  return (
    <SignLayout title="로그인">
      <Form onSubmit={handleSubmit(onValid)}>
        <Flex column>
          {/* Email */}
          <InputGroup title="이메일" message={errors.email?.message}>
            <Input
              type="text"
              placeholder="example@example.com"
              status={errors.email ? "error" : "default"}
              {...register("email", {
                required: { value: true, message: EMAIL_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(EMAIL_REGEX), message: EMAIL_ERROR_MESSAGE.INVALID },
              })}
            />
          </InputGroup>

          {/* Password */}
          <InputGroup title="비밀번호" message={errors.password?.message}>
            <Input
              type="password"
              placeholder="Password"
              status={errors.password ? "error" : "default"}
              {...register("password", {
                required: { value: true, message: PASSWORD_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(PASSWORD_REGEX), message: PASSWORD_ERROR_MESSAGE.INVALID },
              })}
            />
          </InputGroup>
        </Flex>

        <Flex className="button-groups">
          <Button disabled={!!errors.email || !!errors.password}>로그인</Button>
        </Flex>
      </Form>

      <Flex justifyContent="center" className="link-groups">
        <Link href="/sign-up">계정이 존재하지 않습니다.</Link>
      </Flex>
    </SignLayout>
  );
};

export default SignInPage;
