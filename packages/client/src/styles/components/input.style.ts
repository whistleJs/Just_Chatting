import styled from "@emotion/styled";

import { ThemeColors } from "@/styles/common/theme.style";

interface Props {
  status?: "default" | "error";
}

const InputStyles = {
  default: {
    padding: "10px",
    border: `solid 1px ${ThemeColors.gray.default}`,
  },
  error: {
    padding: "9px",
    border: `solid 2px ${ThemeColors.red.default} !important`,
  },
};

export const Input = styled.input<Props>(({ status = "default" }) => ({
  width: "100%",
  borderRadius: "4px",
  ...InputStyles[status],

  "&:focus": {
    padding: "9px",
    border: `solid 2px ${ThemeColors.main.default}`,
  },
}));
