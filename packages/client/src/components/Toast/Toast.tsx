import { useEffect, useRef, useState } from "react";

import { TOAST_MESSAGES } from "@/core/constants/toast.constants";
import useToast from "@/core/hooks/useToast";

import { CommonToastContainerStyles, CommonToastStyles, TOTAL_ANIMATE_TIMES } from "./style";
import { ToastData } from "./model";

export const Toast = () => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [activeToast, setActiveToast] = useState<ToastData>();
  const { toastList, removeToast } = useToast();

  // Handler
  const handlerTimeout = () => {
    setActiveToast(undefined);
    removeToast();
  };

  // Hooks
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeToast) {
      timeoutRef.current = setTimeout(handlerTimeout, TOTAL_ANIMATE_TIMES);
    }
  }, [activeToast]);

  useEffect(() => {
    if (!activeToast) {
      setActiveToast(TOAST_MESSAGES[toastList[0]]);
    }
  }, [toastList]);

  return (
    <CommonToastContainerStyles>
      {activeToast && (
        <CommonToastStyles column type={activeToast.type}>
          <span className="common-toast__title">{activeToast.type}</span>
          <span className="common-toast__text">{activeToast.message}</span>

          <div className="common-toast__timer">
            <div />
          </div>
        </CommonToastStyles>
      )}
    </CommonToastContainerStyles>
  );
};
