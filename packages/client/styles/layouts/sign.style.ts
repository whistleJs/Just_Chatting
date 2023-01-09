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

export const SignLayoutContainerStyles = styled(CommonContainerStyles)`
  & span.title {
    font-size: 64px;
    color: white;

    & > sup {
      display: inline-block;
      font-size: 32px;
      animation: ${BounceAnimation} 1s infinite;
    }
  }

  & .form {
    margin-top: 10px;
  }

  /* Input Groups */
  & .input-groups > div {
    &:not(:first-of-type) {
      margin-top: 16px;
    }

    & > .title {
      color: white;
    }
  }

  /* Button Groups */
  & .button-groups {
    margin-top: 25px;
  }

  /* Link Groups */
  & .link-groups {
    margin-top: 20px;
    width: 100%;

    & > a {
      font-size: 14px;
      color: white;
      text-decoration: underline;
    }
  }
`;
