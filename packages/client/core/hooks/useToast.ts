import { useAtom } from "jotai";

import { Toast } from "@/components/common-toast/model";

import { toastAtom } from "@/store/toast.store";

export default () => {
  const [toastList, setToastList] = useAtom(toastAtom);

  const createToast = (toastData: Toast) => {
    setToastList((prev) => [...prev, { ...toastData }]);
  };

  const removeToast = (index: number = 0) => {
    setToastList((prev) => [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]);
  };

  return { toastList, createToast, removeToast };
};
