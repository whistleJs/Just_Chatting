import { css } from "@emotion/react";

import { ThemeColors } from "@/styles/common/theme.style";

export const BaseInputStyles = css({
  padding: "10px 8px",
  width: "100%",
  border: "none",
  borderRadius: "4px",
  "&:focus": {
    outline: `solid ${ThemeColors.main.default}`,
  },
});
