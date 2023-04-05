import dayjs from "dayjs";

import { useUser } from "@/core/hooks/useUser";

import { Flex } from "@/styles/common/flex.style";
import {
  ChatBoxContent,
  ChatBoxContentTime,
  ChatBoxGroup,
  ChatBoxProfile,
  ChatBoxProfileName,
} from "@/styles/pages/index.style";

import { ChatTextGroupData } from "./model";
import { AutoHeightImage } from "../AutoHeightImage";

interface Props {
  data: ChatTextGroupData;
}

export const ChatTextGroup = ({ data }: Props) => {
  const { id: userId } = useUser();

  return (
    <ChatBoxGroup
      gap="8px"
      column={data.user?.id === userId ? true : false}
      alignItems={data.user?.id === userId ? "flex-end" : "flex-start"}
    >
      {data.user?.id === userId ? (
        data.historyList.map((history) => (
          // 나
          <Flex key={history.id} gap="4px" alignItems="flex-end" justifyContent="flex-end" style={{ width: "100%" }}>
            <ChatBoxContentTime>{dayjs(history.createdAt).format("HH:mm:ss")}</ChatBoxContentTime>
            <ChatBoxContent style={{ backgroundColor: "#ffd61e" }}>
              {history.type === "TEXT" ? history.message : <AutoHeightImage src={history.message} alt="Send Image" />}
            </ChatBoxContent>
          </Flex>
        ))
      ) : (
        // 상대방
        <>
          <ChatBoxProfile alignItems="center" justifyContent="center">
            {data.user?.nickname[0] || "-"}
          </ChatBoxProfile>

          <Flex auto column gap="8px" alignItems="flex-start">
            <ChatBoxProfileName>{data.user?.nickname || "(알수 없음)"}</ChatBoxProfileName>

            {data.historyList.map((history) => (
              <Flex key={history.id} gap="4px" alignItems="flex-end" style={{ width: "100%" }}>
                <ChatBoxContent>
                  {history.type === "TEXT" ? (
                    history.message
                  ) : (
                    <AutoHeightImage src={history.message} alt="Receive Image" />
                  )}
                </ChatBoxContent>
                <ChatBoxContentTime>{dayjs(history.createdAt).format("HH:mm:ss")}</ChatBoxContentTime>
              </Flex>
            ))}
          </Flex>
        </>
      )}
    </ChatBoxGroup>
  );
};
