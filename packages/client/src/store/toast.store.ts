import { atom } from "jotai";

import { TOAST_TYPE } from "@/components/Toast/model";

export const toastAtom = atom<TOAST_TYPE[]>([]);
