import { FlexStyles } from "@/styles/common/flex.style";
import { ContainerStyles } from "@/styles/page/index.style";

import CommonButton from "@/components/common/common-button";
import CommonInput from "@/components/common/common-input";

export default () => {
  return (
    <ContainerStyles column alignItems="center" justifyContent="center">
      <FlexStyles column>
        <span className="title">
          <sup>Just</sup>Chatting
        </span>

        <FlexStyles column className="form">
          <FlexStyles column className="input-groups">
            <CommonInput title="아이디" placeholder="ID" />
            <CommonInput
              type="password"
              title="비밀번호"
              placeholder="Password"
            />
          </FlexStyles>

          <FlexStyles gap="10px" className="button-groups">
            <CommonButton>로그인</CommonButton>
            <CommonButton>회원가입</CommonButton>
          </FlexStyles>
        </FlexStyles>
      </FlexStyles>
    </ContainerStyles>
  );
};
