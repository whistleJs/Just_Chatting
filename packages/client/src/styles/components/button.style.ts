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
    fontSize: "18px",
  },
  large: {
    padding: "10px 24px",
    fontSize: "24px",
  },
};

// Interface
interface Props {
  size?: keyof typeof ButtonSizes
}

// Component
export const Button = styled.button<Props>(({ size = 'middle' }) => ({
  width: "100%",
  borderRadius: "4px",
  backgroundColor: "white",
  tranistion: ".1s",
  cursor: "pointer",
  ...ButtonSizes[size],
  "&:hover, &:focus": {
    backgroundColor: ThemeColors.main.active,
    color: "white",
  },
}));
