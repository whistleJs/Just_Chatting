import { Theme, ThemeColor } from "@emotion/react";

export const ThemeColors: ThemeColor = {
  main: {
    disabled: "",
    default: "#5a27d5",
    active: "#3d1e8a",
  },
  red: {
    disabled: "",
    default: "#f74346",
    active: "",
  },
  orange: {
    disabled: "",
    default: "#ef8a17",
    active: "",
  },
  green: {
    disabled: "",
    default: "#04cd88",
    active: "",
  },
  blue: {
    disabled: "",
    default: "#1378eb",
    active: "",
  },
};

export type ThemeColorType = keyof typeof ThemeColors;

export default {
  color: ThemeColors,
} as Theme;