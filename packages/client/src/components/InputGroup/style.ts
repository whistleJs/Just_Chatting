import styled from "@emotion/styled";

import { Flex } from "@/styles/common/flex.style";

export const Container = styled(Flex)`
  width: 100%;

  & > .input-group__title {
    font-size: 14px;
    font-weight: 500;
  }

  & > .input-group__message {
    font-size: 12px;
    font-weight: 500;
  }

  & > input {
    margin: 5px 0;
  }
`;
