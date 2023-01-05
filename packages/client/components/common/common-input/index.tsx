import { ChangeEvent, HTMLInputTypeAttribute } from "react";

import { CommonInputStyles } from "./style";

type CommonInputProps = {
  type?: HTMLInputTypeAttribute;
  title?: JSX.Element | string;
  text?: JSX.Element | string;
  placeholder?: string;
  value?: string | string[] | number;

  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default ({
  type,
  title,
  text,
  placeholder,
  value,
  onChange,
}: CommonInputProps) => {
  return (
    <CommonInputStyles column>
      {title && <div className="title">{title}</div>}

      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {text && <div className="text">{text}</div>}
    </CommonInputStyles>
  );
};
