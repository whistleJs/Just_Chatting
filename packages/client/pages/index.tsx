import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ComponentProps, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSetAtom } from "jotai";

import ChatHistoryService from "@/api/ChatHistoryService";
import { StatusResponse } from "@/api/model/socket.model";
import { ChatHistoryResponse } from "@/api/model/chatHistory.model";
import { ChatTextGroup, ChatTextGroupData } from "@/components/ChatTextGroup";
import useSocket from "@/core/hooks/useSocket";
import { diffTime } from "@/core/utils/date.util";
import { tokenAtom } from "@/store/token.store";

import { Flex } from "@/styles/common/flex.style";
import {
  ChatBox,
  ChatBoxContainer,
  ChatBoxLogoutButton,
  ChatBoxTextarea,
  Container,
  StatusBox,
  StatusItem,
  StatusItemCircle,
} from "@/styles/pages/index.style";

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies } }) => {
  if (cookies.token === undefined) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};

const IndexPage = () => {
  const setToken = useSetAtom(tokenAtom);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const socket = useSocket();
  const [message, setMessage] = useState("");
  const [chatHistoryList, setChatHistoryList] = useState<ChatHistoryResponse[]>([]);
  const [statusList, setStatusList] = useState<StatusResponse[]>([]);

  const viewChatHistoryList = useMemo(() => {
    const result: ChatTextGroupData[] = [];
    let group: ChatTextGroupData | null = null;

    chatHistoryList.forEach((chatHistory) => {
      if (
        group === null ||
        (group.user === null && chatHistory.user !== null) ||
        (group.user !== null && (chatHistory.user === null || group.user.id !== chatHistory.user.id))
      ) {
        if (group !== null) {
          result.push(group);
        }

        group = {
          user: chatHistory.user,
          historyList: [chatHistory],
        };
      } else {
        group.historyList.push(chatHistory);
      }
    });

    if (group !== null) {
      result.push(group);
    }

    return result;
  }, [chatHistoryList]);

  const handleConnectSocket = useCallback(async () => {
    const { data } = await ChatHistoryService.findAll();

    setChatHistoryList(data);
  }, []);

  const handleChatMessage = useCallback((chatHistory: ChatHistoryResponse) => {
    setChatHistoryList((prev) => [...prev, chatHistory]);
  }, []);

  const handleUserStatus = useCallback((statusList: StatusResponse[]) => {
    setStatusList(
      statusList.map((status) => {
        return {
          ...status,
          updatedAt: diffTime(dayjs(status.updatedAt)),
        };
      })
    );
  }, []);

  const handleChangeTextarea: ComponentProps<"textarea">["onChange"] = (event) => {
    const { value } = event.target as HTMLTextAreaElement;

    setMessage(value);
  };

  const handlePasteTextarea: ComponentProps<"textarea">["onPaste"] = (event) => {
    const { files } = event.clipboardData;

    if (files.length !== 1) return;

    const file = files[0];

    if (!/^image\/(.+)/g.test(file.type)) return;
    if (file.size > 1024 * 1024 * 300) return;

    event.preventDefault();

    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target) {
        socket?.emit("/chat/message", { message: event.target.result, type: "IMAGE" });
      }
    };

    reader.readAsDataURL(file);
  };

  const handleKeydownTextarea: ComponentProps<"textarea">["onKeyDown"] = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Enter") {
      if (message.trim() === "") return;

      if (!event.shiftKey) {
        event.preventDefault();

        socket?.emit("/chat/message", { message, type: "TEXT" });

        setMessage("");
      }
    }
  };

  const handleClickLogoutButton = () => {
    setToken(null);

    router.push("/sign-in");
  };

  useEffect(() => {
    containerRef.current?.scroll(0, chatHistoryList.length * 10000);
  }, [chatHistoryList, containerRef]);

  useEffect(() => {
    socket?.on("connect", handleConnectSocket);
    socket?.on("/status-list", handleUserStatus);
    socket?.on("/chat/message", handleChatMessage);

    return () => {
      socket?.off("connect", handleConnectSocket);
      socket?.off("/status-list", handleUserStatus);
      socket?.off("/chat/message", handleChatMessage);
    };
  }, [socket, handleConnectSocket, handleUserStatus, handleChatMessage]);

  return (
    <Container alignItems="center" justifyContent="center">
      <Flex column>
        <ChatBox column>
          <ChatBoxContainer ref={containerRef} auto column alignItems="flex-end">
            {viewChatHistoryList.map((group, groupIndex) => (
              <ChatTextGroup key={`chat-text-group-${groupIndex}`} data={group} />
            ))}
          </ChatBoxContainer>

          <ChatBoxTextarea
            rows={4}
            value={message}
            onChange={handleChangeTextarea}
            onPaste={handlePasteTextarea}
            onKeyDown={handleKeydownTextarea}
          />
        </ChatBox>

        <ChatBoxLogoutButton onClick={handleClickLogoutButton}>로그아웃</ChatBoxLogoutButton>
      </Flex>

      <StatusBox column gap="15px">
        {statusList.map((status) => (
          <StatusItem alignItems="center" key={status.id}>
            <span className="status-box__nickname">{status.nickname}</span>

            <StatusItemCircle active={status.isOnline} />

            {!status.isOnline && <span className="status-box__updatedAt">{status.updatedAt}</span>}
          </StatusItem>
        ))}
      </StatusBox>
    </Container>
  );
};

export default IndexPage;
