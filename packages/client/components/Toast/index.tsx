import { useEffect, useRef, useState } from "react";

import { TOAST_MESSAGES } from "@/core/constants/toast.constants";
import useToast from "@/core/hooks/useToast";

import { CommonToastContainerStyles, CommonToastStyles, TOTAL_ANIMATE_TIMES } from "./style";
import { Toast } from "./model";

const Toast = () => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [activeToast, setActiveToast] = useState<Toast>();
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
          <span className="common-toast-title">{activeToast.type}</span>
          <span className="common-toast-text">{activeToast.message}</span>

          <div className="common-toast-timer">
            <div />
          </div>
        </CommonToastStyles>
      )}
    </CommonToastContainerStyles>
  );
};

export default Toast;
