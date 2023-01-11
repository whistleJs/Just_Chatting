import { atom } from "jotai";

import { TOAST_MESSAGE_TYPE } from "@/components/common-toast/model";

export const toastAtom = atom<TOAST_MESSAGE_TYPE[]>([]);
