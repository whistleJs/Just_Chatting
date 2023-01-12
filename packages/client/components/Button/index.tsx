import { CSSProperties, KeyboardEvent, MouseEvent } from "react";

import { ThemeColorType } from "@/styles/common/theme.style";
import { ButtonStyles } from "./style";
import { ButtonSizeType } from "./style.model";

interface ButtonProps {
  children: string | JSX.Element;
  color?: ThemeColorType;
  size?: ButtonSizeType;
  style?: CSSProperties;

  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, color, size, style, onClick, onKeyDown }: ButtonProps) => {
  return (
    <ButtonStyles color={color || "main"} size={size || "middle"} style={style} onClick={onClick} onKeyDown={onKeyDown}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
