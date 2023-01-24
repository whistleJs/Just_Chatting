import { atom } from "jotai";

export const atomWithStorage = (key: string, initialValue: string | null = null) => {
  const baseAtom = atom(initialValue);
  baseAtom.onMount = (setValue) => {
    setValue(localStorage.getItem(key));
  };

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (_, set, newToken: string | null) => {
      set(baseAtom, newToken);

      if (typeof newToken === "string") {
        localStorage.setItem(key, newToken);
      } else {
        localStorage.removeItem(key);
      }
    }
  );

  return derivedAtom;
};
