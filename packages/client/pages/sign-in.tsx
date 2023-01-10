import Link from "next/link";

import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common-input";

import SignLayout from "@/layouts/sign";

import { FlexStyles } from "@/styles/common/flex.style";

export default () => {
  return (
    <SignLayout>
      <FlexStyles column className="form">
        <FlexStyles column className="input-groups">
          <CommonInput title="아이디" placeholder="ID" value={""} onChange={() => {}} />

          <CommonInput type="password" title="비밀번호" placeholder="Password" value={""} onChange={() => {}} />
        </FlexStyles>

        <FlexStyles className="button-groups">
          <CommonButton onClick={() => {}}>로그인</CommonButton>
        </FlexStyles>
      </FlexStyles>

      <FlexStyles justifyContent="center" className="link-groups">
        <Link href="/sign-up">계정이 존재하지 않습니다.</Link>
      </FlexStyles>
    </SignLayout>
  );
};
