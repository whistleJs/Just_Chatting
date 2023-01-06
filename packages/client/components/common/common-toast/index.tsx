import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import { toastAtom } from "@/store/toast.store";

import { CommonToastContainerStyles, CommonToastStyles } from "./style";

export default () => {
  const [toastList, setToastList] = useAtom(toastAtom);
  const [frameInterval, setFrameInterval] = useState<number>();

  // Handler
  const handlerRequestAnimationFrame = () => {};

  // Hooks
  useEffect(() => {
    setFrameInterval((savedInterval) => {
      return savedInterval
        ? undefined
        : requestAnimationFrame(handlerRequestAnimationFrame);
    });
  }, []);

  return (
    <CommonToastContainerStyles>
      {toastList.map((toast) => (
        <CommonToastStyles type={toast.type}>
          <span className="title">{toast.title}</span>
          <span className="text">{toast.text}</span>
        </CommonToastStyles>
      ))}
    </CommonToastContainerStyles>
  );
};
