import { CSSProperties } from "react";

import { ThemeColorType } from "@/styles/common/theme.style";

/* Size */
export interface ButtonSizeOption {
  padding: string;
  fontSize: number;
}

export interface ButtonSizeData {
  small: ButtonSizeOption;
  middle: ButtonSizeOption;
  large: ButtonSizeOption;
}

export type ButtonSizeType = keyof ButtonSizeData;

/* Props */
export interface ButtonStyleProps {
  color: ThemeColorType;
  size: ButtonSizeType;
  style?: CSSProperties;
}
