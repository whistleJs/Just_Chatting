import styled from "@emotion/styled";

import { FlexStyles } from "@/styles/common/flex.style";

export const CommonInputStyles = styled(FlexStyles)`
  width: 100%;

  & > .title {
    font-size: 16px;
  }

  & > .text {
    font-size: 14px;
  }

  & > input {
    margin-top: 4px;
    padding: 10px 8px;
    width: 100%;
    border: none;
    border-radius: 4px;
  }
`;
