import styled from "@emotion/styled";

import { ThemeColors } from "@/styles/common/theme.style";

export const ButtonSizes = {
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

export const Button = styled.button({
  width: "100%",
  borderRadius: "4px",
  backgroundColor: "white",
  tranistion: ".1s",
  cursor: "pointer",
  ...ButtonSizes.middle,
  "&:hover, &:focus": {
    backgroundColor: ThemeColors.main.active,
    color: "white",
  },
});
