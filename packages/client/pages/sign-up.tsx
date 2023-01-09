import Link from "next/link";

import CommonButton from "@/components/common/common-button";
import CommonInput from "@/components/common/common-input";

import SignLayout from "@/layouts/sign";

import { FlexStyles } from "@/styles/common/flex.style";

export default () => {
  return (
    <SignLayout>
      <FlexStyles column className="form">
        <FlexStyles column className="input-groups">
          <CommonInput title="이름" placeholder="Name" />

          <CommonInput title="닉네임" placeholder="Nickname" />

          <CommonInput title="아이디" placeholder="ID" />

          <CommonInput
            type="password"
            title="비밀번호"
            placeholder="Password"
          />

          <CommonInput
            type="password"
            title="비밀번호 확인"
            placeholder="Password Confirm"
          />
        </FlexStyles>

        <FlexStyles className="button-groups">
          <CommonButton>회원가입</CommonButton>
        </FlexStyles>
      </FlexStyles>

      <FlexStyles justifyContent="center" className="link-groups">
        <Link href="/sign-in">이미 계정이 있습니다.</Link>
      </FlexStyles>
    </SignLayout>
  );
};
