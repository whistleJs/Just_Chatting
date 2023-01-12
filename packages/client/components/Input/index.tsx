import { ChangeEvent, HTMLInputTypeAttribute, KeyboardEvent } from "react";

import { InputStyles } from "./style";

interface InputProps {
  type?: HTMLInputTypeAttribute;
  title?: JSX.Element | string;
  text?: JSX.Element | string | null;
  placeholder?: string;
  value: string | string[] | number;

  isError?: boolean;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ type, title, text, placeholder, value, isError, onChange, onKeyDown, onEnter }: InputProps) => {
  const handlerKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <InputStyles column isError={isError || false}>
      {title && <div className="title">{title}</div>}

      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handlerKeydown}
      />

      {text && <div className="text">{text}</div>}
    </InputStyles>
  );
};

export default Input;
