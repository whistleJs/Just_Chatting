import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { getColorByStatus } from "@/core/utils/style.util";

import { Flex } from "@/styles/common/flex.style";

import { CommonToastStylesProp } from "./style.model";

// Static Variable
export const FADE_TIMES = 0.5 * 1000;
export const SHOW_TIMES = 5 * 1000;

export const TOTAL_ANIMATE_TIMES = FADE_TIMES * 2 + SHOW_TIMES;

// Styles
const ToastAnimation = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  ${(FADE_TIMES / TOTAL_ANIMATE_TIMES) * 100 + "%"} {
    transform: translateY(0px);
    opacity: 1;
  }

  ${((FADE_TIMES + SHOW_TIMES) / TOTAL_ANIMATE_TIMES) * 100 + "%"} {
    transform: translateY(0px);
    opacity: 1;
  }

  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
`;

const ToastTimerAnimation = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
`;

export const CommonToastContainerStyles = styled.div`
  position: fixed;
  left: 50px;
  bottom: 50px;
  z-index: 99999;
`;

export const CommonToastStyles = styled(Flex)<CommonToastStylesProp>(({ type }) => ({
  position: "relative",
  padding: "16px 20px 24px",
  width: "250px",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.16)",
  overflow: "hidden",
  animation: `${ToastAnimation} ${TOTAL_ANIMATE_TIMES}ms`,
  "& > span.common-toast-title": {
    fontSize: "18px",
  },
  "& > span.common-toast-text": {
    marginTop: "4px",
    fontSize: "16px",
  },
  "& > .common-toast-timer": {
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "6px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",

    "& > div": {
      height: "100%",
      backgroundColor: getColorByStatus(type),
      animation: `${ToastTimerAnimation} ${SHOW_TIMES}ms linear forwards`,
    },
  },
}));
