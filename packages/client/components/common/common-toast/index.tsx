import { useEffect, useRef, useState } from "react";

import useToast from "@/hooks/useToast";

import { TOTAL_ANIMATE_TIMES } from "./constants";
import { CommonToastContainerStyles, CommonToastStyles } from "./style";
import { Toast } from "./model";

export default () => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [activeToast, setActiveToast] = useState<Toast | null>(null);
  const { toastList, removeToast } = useToast();

  // Handler
  const handlerTimeout = () => {
    setActiveToast(null);
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
      setActiveToast(toastList[0]);
    }
  }, [toastList]);

  return (
    <CommonToastContainerStyles>
      {activeToast && (
        <CommonToastStyles column type={activeToast.type}>
          <span className="common-toast-title">{activeToast.title}</span>
          <span className="common-toast-text">{activeToast.text}</span>
        </CommonToastStyles>
      )}
    </CommonToastContainerStyles>
  );
};
