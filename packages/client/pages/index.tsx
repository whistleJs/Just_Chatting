import { ContainerStyles } from "@/styles/page/index.style";

import CommonButton from "@/components/common/common-button";

export default () => {
  return (
    <ContainerStyles column alignItems="center" justifyContent="center">
      <span>
        <sup>Just</sup>Chatting
      </span>

      <CommonButton>로그인</CommonButton>
    </ContainerStyles>
  );
};
