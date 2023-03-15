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

// Styles
export const Container = styled(Flex)`
  width: 100vw;
  height: 100vh;
  gap: 30px;

  & > div {
    height: 600px;
  }
`;

// <chat-box>
export const ChatBox = styled(Flex)`
  width: 400px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 16px 8px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

export const ChatBoxContainer = styled(Flex)`
  flex-direction: column-reverse;
  padding: 16px;
  width: 100%;
  height: calc(100% - 109.34px);
  overflow-y: auto;
`;

export const ChatBoxGroup = styled(Flex)`
  width: 100%;
`;

export const ChatBoxProfile = styled(Flex)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${ThemeColors.gray.default};
`;

export const ChatBoxProfileName = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${ThemeColors.gray.default};
`;

export const ChatBoxContent = styled(Flex)`
  padding: 8px 12px;
  max-width: 60%;
  border-radius: 6px;
  font-size: 14px;
`;

export const ChatBoxInput = styled.textarea`
  padding: 16px;
  width: 100%;
  font-size: 14px;
  border: none;
  border-radius: 0px;
  background-color: ${ThemeColors.main.active};
  color: white;
  line-height: 20px;
  resize: none;
`;

// <status-box>
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
