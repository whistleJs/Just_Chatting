import { atom } from "jotai";

import { TOAST_MESSAGE_TYPE } from "@/components/Toast/model";

export const toastAtom = atom<TOAST_MESSAGE_TYPE[]>([]);
