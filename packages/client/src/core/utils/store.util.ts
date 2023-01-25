import { atom } from "jotai";

import { getCookie, removeCookie, setCookie } from "./cookie.util";

export const atomWithStorage = (key: string, initialValue: string | null = null) => {
  const baseAtom = atom(initialValue);
  baseAtom.onMount = (setValue) => {
    setValue(getCookie(key));
  };

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (_, set, newToken: string | null) => {
      set(baseAtom, newToken);

      if (typeof newToken === "string") {
        setCookie(key, newToken);
      } else {
        removeCookie(key);
      }
    }
  );

  return derivedAtom;
};
