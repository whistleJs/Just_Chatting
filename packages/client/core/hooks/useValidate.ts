import { Dispatch, SetStateAction, useMemo, useState } from "react";

type useValidateReturn = [string, boolean, Dispatch<SetStateAction<string>>];

export default (regex: string): useValidateReturn => {
  const REGEXP = new RegExp(regex, "g");
  const [value, setValue] = useState("");
  const isError = useMemo(() => {
    return value.trim() === "" || !REGEXP.test(value);
  }, [value]);

  return [value, isError, setValue];
};
