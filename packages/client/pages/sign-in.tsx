import Link from "next/link";
import { useRouter } from "next/router";

import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common/common-input";

import SignLayout from "@/layouts/sign";

import { FlexStyles } from "@/styles/common/flex.style";

export default () => {
  const router = useRouter();

  const handlerClickSignUpButton = () => {
    router.push("/sign-up");
  };

  return (
    <SignLayout>
      <FlexStyles column className="form">
        <FlexStyles column className="input-groups">
          <CommonInput title="아이디" placeholder="ID" />

          <CommonInput type="password" title="비밀번호" placeholder="Password" />
        </FlexStyles>

        <FlexStyles className="button-groups">
          <CommonButton>로그인</CommonButton>
        </FlexStyles>
      </FlexStyles>

      <FlexStyles justifyContent="center" className="link-groups">
        <Link href="/sign-up">계정이 존재하지 않습니다.</Link>
      </FlexStyles>
    </SignLayout>
  );
};
