import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Flex } from "@/styles/common/flex.style";
import { ThemeColors } from "../common/theme.style";

/* Keyframes */
const StatusItemAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled(Flex)`
  width: 100vw;
  height: 100vh;
  gap: 30px;

  & > div {
    height: 600px;
  }
`;

export const ChatBox = styled(Flex)`
  width: 400px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 16px 8px rgba(0, 0, 0, 0.16);
`;

export const StatusBox = styled(Flex)`
  width: 200px;
`;

export const StatusItemCircle = styled.div<{ active: boolean }>(({ active }) => ({
  margin: "0 8px",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: ThemeColors[active ? "green" : "gray"].default,
}));

export const StatusItem = styled(Flex)`
  padding: 10px 12px;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16);
  transform: translateX(50px);
  animation: ${StatusItemAnimation} 0.7s forwards;

  & .status-box__nickname {
    font-size: 14px;
    font-weight: 500;
  }

  & .status-box__updatedAt {
    font-size: 12px;
    font-weight: 500;
    color: ${ThemeColors.gray.default};
  }
`;
