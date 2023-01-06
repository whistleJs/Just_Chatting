import { atom } from "jotai";

import { Toast } from "@/components/common/common-toast/model";

export const toastAtom = atom<Toast[]>([]);
