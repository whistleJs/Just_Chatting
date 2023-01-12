import styled from "@emotion/styled";

import { FlexStyles } from "@/styles/common/flex.style";

import { InputStylesProps } from "./style.model";

export const InputStyles = styled(FlexStyles)<InputStylesProps>(({ theme, isError }) => ({
  width: "100%",

  "& > .title": {
    fontSize: "16px",
  },

  "& > .text": {
    fontSize: "14px",
    color: `${isError ? theme.color.orange.default : "inherit"}`,
  },

  "& > input": {
    margin: "6px 0 8px",
    padding: "10px 8px",
    width: "100%",
    border: "none",
    borderRadius: "4px",
    outline: `solid ${theme.color[isError ? "red" : "main"].default}`,
  },
}));
