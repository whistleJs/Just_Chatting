import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { ComponentProps, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAtomValue } from "jotai";

import { StatusResponse } from "@/api/model/socket.model";
import useSocket from "@/core/hooks/useSocket";
import { diffTime } from "@/core/utils/date.util";
import { tokenAtom } from "@/store/token.store";

import { Flex } from "@/styles/common/flex.style";
import {
  ChatBox,
  ChatBoxContainer,
  ChatBoxContent,
  ChatBoxContentTime,
  ChatBoxGroup,
  ChatBoxProfile,
  ChatBoxProfileName,
  ChatBoxTextarea,
  Container,
  StatusBox,
  StatusItem,
  StatusItemCircle,
} from "@/styles/pages/index.style";
import ChatHistoryService from "@/api/ChatHistoryService";
import { ChatHistoryResponse, ChatHistoryUserResponse } from "@/api/model/chatHistory.model";

interface ViewChatHistoryGroup {
  user: ChatHistoryUserResponse | null;
  historyList: ChatHistoryResponse[];
}

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
  const token = useAtomValue(tokenAtom);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const socket = useSocket();

  const [message, setMessage] = useState("");
  const [chatHistoryList, setChatHistoryList] = useState<ChatHistoryResponse[]>([]);
  const [statusList, setStatusList] = useState<StatusResponse[]>([]);

  const userId = useMemo(() => {
    if (token === null) return -1;

    const data = token.split(".")[1];
    const jsonData = JSON.parse(Buffer.from(data, "base64").toString("ascii"));

    return jsonData.sub;
  }, [token]);

  const viewChatHistoryList = useMemo(() => {
    const result: ViewChatHistoryGroup[] = [];
    let group: ViewChatHistoryGroup | null = null;

    chatHistoryList.forEach((chatHistory) => {
      if (
        group === null ||
        (group.user === null && chatHistory.user === null) ||
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

  const handleKeydownTextarea: ComponentProps<"textarea">["onKeyDown"] = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Enter") {
      if (message.trim() === "") return;

      if (!event.shiftKey) {
        event.preventDefault();

        socket?.emit("/chat/message", message);

        setMessage("");
      }
    }
  };

  useEffect(() => {
    containerRef.current?.scroll(0, chatHistoryList.length * 10000);
  }, [chatHistoryList, containerRef]);

  useEffect(() => {
    socket?.on("connect", handleConnectSocket);
    socket?.on("/status-list", handleUserStatus);
    socket?.on("/chat/message", handleChatMessage);
  }, [socket, handleConnectSocket, handleUserStatus, handleChatMessage]);

  return (
    <Container alignItems="center" justifyContent="center">
      <Flex column>
        <ChatBox column>
          <ChatBoxContainer ref={containerRef} auto column alignItems="flex-end">
            {viewChatHistoryList.map((group, groupIndex) => (
              <ChatBoxGroup
                key={groupIndex}
                gap="8px"
                column={group.user?.id === userId ? true : false}
                alignItems={group.user?.id === userId ? "flex-end" : "flex-start"}
              >
                {group.user?.id === userId ? (
                  group.historyList.map((history) => (
                    // 나
                    <Flex key={history.id} gap="4px" alignItems="flex-end">
                      <ChatBoxContentTime>{dayjs(history.createdAt).format("HH:mm:ss")}</ChatBoxContentTime>
                      <ChatBoxContent style={{ backgroundColor: "#ffd61e" }}>{history.message}</ChatBoxContent>
                    </Flex>
                  ))
                ) : (
                  // 상대방
                  <>
                    <ChatBoxProfile alignItems="center" justifyContent="center">
                      {group.user?.nickname[0] || "-"}
                    </ChatBoxProfile>

                    <Flex auto column gap="8px" alignItems="flex-start">
                      <ChatBoxProfileName>{group.user?.nickname || "(알수 없음)"}</ChatBoxProfileName>

                      {group.historyList.map((history) => (
                        <Flex key={history.id} gap="4px" alignItems="flex-end" style={{ width: "100%" }}>
                          <ChatBoxContent>{history.message}</ChatBoxContent>
                          <ChatBoxContentTime>{dayjs(history.createdAt).format("HH:mm:ss")}</ChatBoxContentTime>
                        </Flex>
                      ))}
                    </Flex>
                  </>
                )}
              </ChatBoxGroup>
            ))}
          </ChatBoxContainer>

          {userId !== -1 && (
            <ChatBoxTextarea
              rows={4}
              value={message}
              onChange={handleChangeTextarea}
              onKeyDown={handleKeydownTextarea}
            />
          )}
        </ChatBox>
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
