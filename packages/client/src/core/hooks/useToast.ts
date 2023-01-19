import { useAtom } from "jotai";

import { TOAST_MESSAGE_TYPE } from "@/components/Toast/model";

import { toastAtom } from "@/store/toast.store";

const useToast = () => {
  const [toastList, setToastList] = useAtom(toastAtom);

  const createToast = (toastType: TOAST_MESSAGE_TYPE) => {
    setToastList((prev) => [...prev, toastType]);
  };

  const removeToast = (index: number = 0) => {
    setToastList((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]);
  };

  return { toastList, createToast, removeToast };
};

export default useToast;
