import styled from "@emotion/styled";

import { ThemeColors } from "@/styles/common/theme.style";

interface Props {
  status?: "default" | "error";
}

const borderStyles = {
  default: `solid 1px ${ThemeColors.gray.default}`,
  error: `solid 2px ${ThemeColors.red.default} !important`,
};

export const Input = styled.input<Props>(({ status = "default" }) => ({
  padding: "10px",
  width: "100%",
  borderRadius: "4px",
  border: borderStyles[status],

  "&:focus": {
    border: `solid 2px ${ThemeColors.main.default}`,
  },
}));
