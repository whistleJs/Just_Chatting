import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { css } from "@emotion/react";

import AuthService from "@/api/AuthService";
import { AuthSignUpRequest } from "@/api/model/auth.model";

import {
  EMAIL_ERROR_MESSAGE,
  EMAIL_REGEX,
  NAME_ERROR_MESSAGE,
  NAME_REGEX,
  NICKNAME_ERROR_MESSAGE,
  NICKNAME_REGEX,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX,
} from "@/core/constants/account.constants";
import useToast from "@/core/hooks/useToast";

import SignLayout from "@/layouts/sign";

import { Flex } from "@/styles/common/flex.style";
import { ThemeColors } from "@/styles/common/theme.style";
import { TOAST_MESSAGE_TYPE } from "@/components/Toast/model";
import { Button } from "@/styles/components/button.style";
import { Input } from "@/styles/components/input.style";
import { Form } from "@/styles/layouts/sign.style";
import { InputGroup } from "@/components/InputGroup";

const SignUpPage = () => {
  const router = useRouter();

  const {
    formState: { errors },
    register,
    handleSubmit,
    setError,
    getValues,
  } = useForm<AuthSignUpRequest & { passwordConfirm: string }>();

  const { createToast } = useToast();

  const onValid = async (request: AuthSignUpRequest) => {
    try {
      await AuthService.signUp(request);
    } catch (error) {
      if (typeof error === "string") {
        switch (error as TOAST_MESSAGE_TYPE) {
          case "ALREADY_EMAIL":
            setError("email", { message: EMAIL_ERROR_MESSAGE.DUPLICATE });
            return;
          case "ALREADY_NICKNAME":
            setError("nickname", { message: NICKNAME_ERROR_MESSAGE.DUPLICATE });
            return;
          default:
            createToast(error as TOAST_MESSAGE_TYPE);
            return;
        }
      }
    }

    createToast("SUCCESS_SIGN_UP");

    router.push("/sign-in");
  };

  return (
    <SignLayout title="회원가입">
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

          {/* Nickname */}
          <InputGroup title="닉네임" message={errors.nickname?.message}>
            <Input
              type="text"
              placeholder="Nickname"
              status={errors.nickname ? "error" : "default"}
              {...register("nickname", {
                required: { value: true, message: NICKNAME_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(NICKNAME_REGEX), message: NICKNAME_ERROR_MESSAGE.INVALID },
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

          {/* Password Confirm */}
          <InputGroup title="비밀번호 확인" message={errors.passwordConfirm?.message}>
            <Input
              type="password"
              placeholder="Password Confirm"
              status={errors.passwordConfirm ? "error" : "default"}
              {...register("passwordConfirm", {
                required: { value: true, message: PASSWORD_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(PASSWORD_REGEX), message: PASSWORD_ERROR_MESSAGE.INVALID },
                validate: { incorrect: (v) => v === getValues("password") || PASSWORD_ERROR_MESSAGE.INCORRECT },
              })}
            />
          </InputGroup>

          {/* Name */}
          <InputGroup title="이름" message={errors.name?.message}>
            <Input
              type="text"
              placeholder="Name"
              status={errors.name ? "error" : "default"}
              {...register("name", {
                required: { value: true, message: NAME_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(NAME_REGEX), message: NAME_ERROR_MESSAGE.INVALID },
              })}
            />
          </InputGroup>
        </Flex>

        <Flex className="button-groups">
          <Button
            disabled={
              !!errors.email || !!errors.nickname || !!errors.password || !!errors.passwordConfirm || !!errors.name
            }
          >
            회원가입
          </Button>
        </Flex>
      </Form>

      <Flex justifyContent="center" className="link-groups">
        <Link href="/sign-in">이미 계정이 있습니다.</Link>
      </Flex>
    </SignLayout>
  );
};

export default SignUpPage;
