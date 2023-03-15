import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { useCallback, useEffect, useState } from "react";

import { StatusResponse } from "@/api/model/socket.model";
import useSocket from "@/core/hooks/useSocket";
import { diffTime } from "@/core/utils/date.util";

import { Flex } from "@/styles/common/flex.style";
import {
  ChatBox,
  ChatBoxContainer,
  ChatBoxContent,
  ChatBoxGroup,
  ChatBoxInput,
  ChatBoxProfile,
  ChatBoxProfileName,
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
  const socket = useSocket();

  const [statusList, setStatusList] = useState<StatusResponse[]>([]);

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

  useEffect(() => {
    socket?.on("/status-list", handleUserStatus);
  }, [socket, handleUserStatus]);

  return (
    <Container alignItems="center" justifyContent="center">
      <ChatBox column>
        <ChatBoxContainer auto gap="8px" alignItems="flex-end">
          {/* 상대방 */}
          <ChatBoxGroup gap="8px" alignItems="flex-start">
            <ChatBoxProfile />

            <Flex auto column gap="8px">
              <ChatBoxProfileName>정성휘</ChatBoxProfileName>
              <ChatBoxContent style={{ backgroundColor: "purple" }}>text</ChatBoxContent>
              <ChatBoxContent style={{ backgroundColor: "purple" }}>text</ChatBoxContent>
            </Flex>
          </ChatBoxGroup>

          {/* 나 */}
          <ChatBoxGroup column gap="8px" alignItems="flex-end">
            <ChatBoxContent style={{ backgroundColor: "orange" }}>text</ChatBoxContent>
            <ChatBoxContent style={{ backgroundColor: "orange" }}>text</ChatBoxContent>
          </ChatBoxGroup>
        </ChatBoxContainer>

        <ChatBoxInput rows={4} />
      </ChatBox>

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
