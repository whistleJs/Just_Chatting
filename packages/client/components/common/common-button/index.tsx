import { CSSProperties, KeyboardEvent, MouseEvent } from "react";

import { ThemeColorType } from "@/styles/common/theme.style";
import { CommonButtonStyles } from "./style";
import { CommonButtonSizeType } from "./style.model";

type CommonButtonProps = {
  children: string | JSX.Element;
  color?: ThemeColorType;
  size?: CommonButtonSizeType;
  style?: CSSProperties;

  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
};

export default ({
  children,
  color,
  size,
  style,
  onClick,
  onKeyDown,
}: CommonButtonProps) => {
  return (
    <CommonButtonStyles
      color={color || "main"}
      size={size || "middle"}
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </CommonButtonStyles>
  );
};
