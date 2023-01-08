import styled from "@emotion/styled";

import { CommonToastStylesProp } from "./style.model";

import { FlexStyles } from "@/styles/common/flex.style";

export const CommonToastContainerStyles = styled.div`
  position: fixed;
  left: 50px;
  bottom: 50px;
  z-index: 99999;
`;

export const CommonToastStyles = styled(FlexStyles)<CommonToastStylesProp>(
  ({ type }) => ({
    padding: "12px 16px",
    minWidth: "250px",
    backgroundColor: "white",
    borderRadius: "8px",
    "& > span.common-toast-title": {
      fontSize: "20px",
    },
    "& > span.common-toast-text": {
      fontSize: "16px",
    },
  })
);
