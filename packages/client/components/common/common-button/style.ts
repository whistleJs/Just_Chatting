import styled from "@emotion/styled";

import { CommonButtonStyleProps, CommonButtonSizeData } from "./style.model";

const BUTTON_SIZE: CommonButtonSizeData = {
  small: {
    padding: "4px 8px",
    fontSize: 12,
  },
  middle: {
    padding: "6px 16px",
    fontSize: 18,
  },
  large: {
    padding: "8px 24px",
    fontSize: 24,
  },
};

export const CommonButtonStyles = styled.button<CommonButtonStyleProps>(
  ({ theme, color, size }) => ({
    padding: BUTTON_SIZE[size].padding,
    border: "none",
    borderRadius: "4px",
    backgroundColor: "white",
    fontSize: `${BUTTON_SIZE[size].fontSize}px`,
    transition: ".1s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.color[color].active,
      color: "white",
    },
  })
);
