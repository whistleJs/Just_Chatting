import styled from "@emotion/styled";

import { ButtonStyleProps, ButtonSizeData } from "./style.model";

const BUTTON_SIZE: ButtonSizeData = {
  small: {
    padding: "4px 8px",
    fontSize: 12,
  },
  middle: {
    padding: "8px 16px",
    fontSize: 18,
  },
  large: {
    padding: "10px 24px",
    fontSize: 24,
  },
};

export const ButtonStyles = styled.button<ButtonStyleProps>(({ theme, color, size, style }) => ({
  padding: BUTTON_SIZE[size].padding,
  width: "100%",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "white",
  fontSize: `${BUTTON_SIZE[size].fontSize}px`,
  transition: ".1s",
  cursor: "pointer",
  "&:hover, &:focus": {
    backgroundColor: theme.color[color].active,
    color: "white",
  },
  ...(style || {}),
}));
