import { Theme, ThemeColor } from "@emotion/react";

export const ThemeColors: ThemeColor = {
  main: {
    disabled: "",
    default: "#5a27d5",
    active: "#3d1e8a",
  },
};

export type ThemeColorType = keyof typeof ThemeColors;

export default {
  color: ThemeColors,
} as Theme;
