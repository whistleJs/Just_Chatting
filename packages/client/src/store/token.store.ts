import { atom } from "jotai";

export const tokenAtom = atom<string | null>(localStorage.getItem("token") ?? null);
export const tokenAtomWithStorage = atom(
  (get) => get(tokenAtom),
  (_, set, newToken: string | null) => {
    set(tokenAtom, newToken);

    if (typeof newToken === "string") {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  }
);
