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

export default () => {
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
    <SignLayout>
      <form onSubmit={handleSubmit(onValid)}>
        <Flex column>
          {/* Email */}
          <Flex column className="input-group">
            <span>이메일</span>

            <Input
              type="email"
              placeholder="example@example.com"
              css={css`
                ${errors.email && `border: solid 2px ${ThemeColors.red.default} !important;`}
              `}
              {...register("email", {
                required: { value: true, message: EMAIL_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(EMAIL_REGEX), message: EMAIL_ERROR_MESSAGE.INVALID },
              })}
            />

            {errors.email && <span className="error-text">{errors.email.message}</span>}
          </Flex>

          {/* Nickname */}
          <Flex column className="input-group">
            <span>닉네임</span>

            <Input
              type="text"
              placeholder="Nickname"
              css={css`
                ${errors.nickname && `border: solid 2px ${ThemeColors.red.default} !important;`}
              `}
              {...register("nickname", {
                required: { value: true, message: NICKNAME_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(NICKNAME_REGEX), message: NICKNAME_ERROR_MESSAGE.INVALID },
              })}
            />

            {errors.nickname && <span className="error-text">{errors.nickname.message}</span>}
          </Flex>

          {/* Password */}
          <Flex column className="input-group">
            <span>비밀번호</span>

            <Input
              type="password"
              placeholder="Password"
              css={css`
                ${errors.password && `border: solid 2px ${ThemeColors.red.default} !important;`}
              `}
              {...register("password", {
                required: { value: true, message: PASSWORD_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(PASSWORD_REGEX), message: PASSWORD_ERROR_MESSAGE.INVALID },
              })}
            />

            {errors.password && <span className="error-text">{errors.password.message}</span>}
          </Flex>

          {/* Password Confirm */}
          <Flex column className="input-group">
            <span>비밀번호 확인</span>

            <Input
              type="password"
              placeholder="Password Confirm"
              css={css`
                ${errors.passwordConfirm && `border: solid 2px ${ThemeColors.red.default} !important;`}
              `}
              {...register("passwordConfirm", {
                required: { value: true, message: PASSWORD_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(PASSWORD_REGEX), message: PASSWORD_ERROR_MESSAGE.INVALID },
                validate: { incorrect: (v) => v === getValues("password") || PASSWORD_ERROR_MESSAGE.INCORRECT },
              })}
            />

            {errors.passwordConfirm && <span className="error-text">{errors.passwordConfirm.message}</span>}
          </Flex>

          {/* Name */}
          <Flex column className="input-group">
            <span>이름</span>

            <Input
              type="text"
              placeholder="Name"
              css={css`
                ${errors.name && `border: solid 2px ${ThemeColors.red.default} !important;`}
              `}
              {...register("name", {
                required: { value: true, message: NAME_ERROR_MESSAGE.REQUIRED },
                pattern: { value: new RegExp(NAME_REGEX), message: NAME_ERROR_MESSAGE.INVALID },
              })}
            />

            {errors.name && <span className="error-text">{errors.name.message}</span>}
          </Flex>
        </Flex>

        <Flex className="button-groups">
          <Button>회원가입</Button>
        </Flex>
      </form>

      <Flex justifyContent="center" className="link-groups">
        <Link href="/sign-in">이미 계정이 있습니다.</Link>
      </Flex>
    </SignLayout>
  );
};
