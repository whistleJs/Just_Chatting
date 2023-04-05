import { useAtomValue } from "jotai";
import { useMemo } from "react";

import { tokenAtom } from "@/store/token.store";

export const useUser = () => {
  const token = useAtomValue(tokenAtom);

  const { sub, email } = useMemo(() => {
    if (token === null) return -1;

    const data = token.split(".")[1];

    return JSON.parse(Buffer.from(data, "base64").toString("ascii"));
  }, [token]);

  return { id: sub, email };
};
