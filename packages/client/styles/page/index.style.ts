import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { CommonContainerStyles } from "@/styles/common/page.style";

const BounceAnimation = keyframes`
  0% {
    transform: scale(1) rotateZ(-15deg) translate(10px, -10px);
  }

  50% {
    transform: scale(0.85) rotateZ(-15deg) translate(10px, -10px);
  }

  100% {
    transform: scale(1) rotateZ(-15deg) translate(10px, -10px);
  }
`;

export const ContainerStyles = styled(CommonContainerStyles)`
  background-color: #5a27d5;

  & > span {
    font-size: 64px;
    color: white;

    & > sup {
      display: inline-block;
      font-size: 32px;
      animation: ${BounceAnimation} 1s infinite;
    }
  }
`;
