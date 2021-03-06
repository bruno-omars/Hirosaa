import React, {
  FC,
  ComponentProps,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";
import {
  Circles,
  Messages,
  MessagesQuery,
  Users,
} from "../../../generated/graphql";
import ChatSidebar from "../../Molecules/Sidebar/ChatSidebar";
import PeopleNum from "../../Atoms/Icon/PeopleNum";
import { COLOR } from "../../../constants/color";
import IconRightInput from "../../Atoms/Inputs/IconRightInput";
import { ReactComponent as MessageSendIcon } from "../../../assets/icons/message-send.svg";
import DefaultButton from "../../Atoms/Buttons/Default";
import { useAuthContext } from "../../../provider/AuthContextProvider";
import { Flex, Text, Avatar } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import _ from "lodash";

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 100%;
  width: 90%;
  height: 90vh;
  margin-top: 20px;
`;

const Right = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 5px 12px;
`;

const StyledSendIcon = styled(MessageSendIcon)`
  width: 20px;
  height: 20px;
  display: flex;
`;

const MessageContainer = styled.ul`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  overflow: scroll;
`;

const MessageLi = styled.li`
  margin: 0 8px 8px;
`;

const MessageWrapper = styled.div<{ isMine: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? "row-reverse" : "row")};
  align-items: center;
`;

const ConversationItem = styled.div`
  margin: 0 8px;
  max-width: 85%;
`;

const MessageContent = styled.div<{ isMine: boolean }>`
  background-color: ${({ isMine }) =>
    isMine ? COLOR.TRANSLUCENT_GREEN : COLOR.LIGHT_GRAY};
  box-sizing: border-box;
  max-width: 100%;
  border-radius: 20px;
  padding: 8px 18px;
`;

const Typography = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  white-space: pre-wap;
  word-break: break-all;
`;

const NewMessageButton = styled(DefaultButton)`
  padding: 4px 8px;
  border-radius: 50px;
  width: 200px;
  height: 40px;
  font-size: 14px;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  margin: auto;
`;

export type Input = {
  text: string;
};

type Props = {
  activeCircleId: number | undefined;
  setActiveCircleId: React.Dispatch<React.SetStateAction<number | undefined>>;
  circle?: Pick<Circles, "id" | "name" | "avatar">;
  messages:
    | (Pick<Messages, "timestamp" | "text" | "id"> & {
        users: Pick<Users, "id" | "avatar" | "name">;
      })[]
    | undefined;
  inputs: Input;
  setInputs: React.Dispatch<Input>;
  handleSubmit: ComponentProps<typeof IconRightInput>["onSubmit"];
  onChange: ComponentProps<typeof IconRightInput>["onChange"];
  hasNewMessage: boolean;
  setHasNewMessage: React.Dispatch<boolean>;
  handleFetchMore: (messages: any) => Promise<void>;
  isFirstLoad: boolean;
};

const ChatCard: FC<Props> = ({
  messages,
  inputs,
  onChange,
  handleSubmit,
  setActiveCircleId,
  activeCircleId,
  circle,
  hasNewMessage,
  setHasNewMessage,
  handleFetchMore,
  isFirstLoad,
  ...rest
}) => {
  const messageEndRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef(null);
  const [isFetching, setIsFetching] = useState(false);
  const history = useHistory();
  const { me } = useAuthContext();

  const handleMoveToDetail = (userId: string) => {
    history.push({
      pathname: `/user-detail/${userId}`,
    });
  };

  const handleScrollToBottom = (behavior: "smooth" | "auto" | undefined) => {
    messageEndRef.current?.scrollIntoView({
      behavior: behavior,
    });
  };

  const onClickNewMessage = () => {
    handleScrollToBottom("smooth");
    setHasNewMessage(false);
  };

  const handleScroll = async (
    isBottom: boolean,
    isTop: boolean,
    messages: MessagesQuery["messages"]
  ) => {
    console.log("scrollRef", scrollRef.current);
    if (isBottom) {
      setHasNewMessage(false);
    } else if (isTop) {
      setIsFetching(true);
      await handleFetchMore(messages);
      setIsFetching(false);
    }
  };

  const callbackHandleScroll = useCallback(
    _.debounce(
      (isBottom, isTop, messages) => handleScroll(isBottom, isTop, messages),
      500
    ),
    []
  );

  const onScroll = (e: React.UIEvent<HTMLUListElement>) => {
    if (isFetching) return;
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const isBottom = scrollHeight - scrollTop <= clientHeight + 25;
    const isTop = scrollTop < 25;
    callbackHandleScroll(isBottom, isTop, messages);
  };

  // const handleDetectBottom = (isVisible: boolean) => {
  //   if (isVisible) {
  //     setHasNewMessage(false);
  //   }
  // };

  // const handleDetectTop = async (isVisible: boolean) => {
  //   if (isVisible) {
  //     await handleFetchMore();
  //   }
  // };

  useEffect(() => {
    if (!isFirstLoad) {
      handleScrollToBottom("auto");
    }
  }, [isFirstLoad]);

  return (
    <Card>
      <ChatSidebar
        setActiveCircleId={setActiveCircleId}
        activeCircleId={activeCircleId}
      />
      <Right>
        <Flex
          borderBottom={`1px solid ${COLOR["BORDER_DIVIDER"]}`}
          alignItems="center"
          pl="20px"
        >
          <Text mr="10px">{circle?.name}</Text>
          <PeopleNum count={30} />
        </Flex>
        {hasNewMessage && (
          <NewMessageButton onClick={onClickNewMessage} bgColor="ORANGE">
            新規メッセージがあります。
          </NewMessageButton>
        )}
        <MessageContainer onScroll={onScroll}>
          {/* <ReactVisibilitySensor
            onChange={handleDetectTop}
            partialVisibility={true}
            offset={{ top: -100, bottom: -100 }}
          >
            <div />
          </ReactVisibilitySensor> */}
          {messages && messages.length !== 0
            ? messages
                .slice()
                .reverse()
                .map((message) => {
                  const isMine = message.users.id == me.id;
                  return (
                    <MessageLi key={message.id}>
                      <MessageWrapper isMine={isMine}>
                        <Avatar
                          size="md"
                          cursor="pointer"
                          src={message.users.avatar ?? ""}
                          onClick={() => handleMoveToDetail(message.users.id)}
                        />
                        <ConversationItem>
                          <MessageContent isMine={isMine}>
                            <Typography>{message.text}</Typography>
                          </MessageContent>
                        </ConversationItem>
                      </MessageWrapper>
                    </MessageLi>
                  );
                })
            : "やりとりがありません。何かメッセージを送ってみましょう"}
          {/* <ReactVisibilitySensor
            onChange={handleDetectBottom}
            partialVisibility={true}
            offset={{ top: -100, bottom: -100 }}
          >
            <div />
          </ReactVisibilitySensor> */}
          <div ref={messageEndRef} />
        </MessageContainer>
        <Bottom>
          <IconRightInput
            icon={
              <StyledSendIcon
                fill={inputs.text ? COLOR.LIGHT_GREEN : COLOR.BORDER_TEXT_INPUT}
              />
            }
            onSubmit={handleSubmit}
            onChange={onChange}
            value={inputs.text}
            placeholder="メッセージを送信する"
            name="text"
          />
        </Bottom>
      </Right>
    </Card>
  );
};

export default ChatCard;
