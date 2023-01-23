import styled from "@emotion/styled";

import { ThemeColors } from "@/styles/common/theme.style";

// Constants
const ButtonSizes = {
  small: {
    padding: "4px 8px",
    fontSize: "12px",
  },
  middle: {
    padding: "8px 16px",
    fontSize: "16px",
  },
  large: {
    padding: "10px 24px",
    fontSize: "24px",
  },
};

// Interface
interface Props {
  size?: keyof typeof ButtonSizes;
}

// Component
export const Button = styled.button<Props>(({ size = "middle" }) => ({
  width: "100%",
  border: `solid 2px ${ThemeColors.main.disabled}`,
  borderRadius: "4px",
  backgroundColor: "white",
  color: ThemeColors.main.disabled,
  fontWeight: "500",
  tranistion: ".1s",
  cursor: "pointer",
  ...ButtonSizes[size],
  "&:hover, &:focus": {
    border: `solid 2px ${ThemeColors.main.default}`,
    backgroundColor: ThemeColors.main.default,
    color: "white",
  },
  "&:disabled": {
    border: `solid 2px ${ThemeColors.gray.default} !important`,
    backgroundColor: "white !important",
    color: `${ThemeColors.gray.default} !important`,
    cursor: "not-allowed",
  },
}));
