import { CSSProperties } from "react";

import { ThemeColorType } from "@/styles/common/theme.style";

/* Size */
export type CommonButtonSizeOption = {
  padding: string;
  fontSize: number;
};

export type CommonButtonSizeData = {
  small: CommonButtonSizeOption;
  middle: CommonButtonSizeOption;
  large: CommonButtonSizeOption;
};

export type CommonButtonSizeType = keyof CommonButtonSizeData;

/* Props */
export type CommonButtonStyleProps = {
  color: ThemeColorType;
  size: CommonButtonSizeType;
  style?: CSSProperties;
};
