import { ThemeColors } from "@/styles/common/theme.style";

export const getColorByStatus = (
  status: "INFO" | "SUCCESS" | "WARNING" | "ERROR"
) => {
  switch (status) {
    case "INFO":
      return ThemeColors.blue.default;
    case "SUCCESS":
      return ThemeColors.green.default;
    case "WARNING":
      return ThemeColors.orange.default;
    case "ERROR":
      return ThemeColors.red.default;
  }
};
