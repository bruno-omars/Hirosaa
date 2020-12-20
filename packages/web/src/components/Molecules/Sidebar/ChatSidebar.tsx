import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";
import { useAuthContext } from "../../../provider/AuthContextProvider";
import { useUserCirclesQuery } from "../../../generated/graphql";
import { Img } from "@chakra-ui/react";

const StyledSidebar = styled.div`
  border-right: 1px solid ${COLOR["BORDER_DIVIDER"]};
  height: 100%;
`;

const StyledCircleIcon = styled.div<{ active: boolean }>`
  border-radius: 8px;
  width: 64px;
  height: 64px;
  background-color: ${COLOR["LIGHT_GRAY"]};
  margin: 12px auto;
  overflow: hidden;
  border: ${({ active }) => active && `2px solid ${COLOR.TRANSLUCENT_ORANGE}`};
  cursor: pointer;
`;

type Props = {
  activeCircleId: number | undefined;
  setActiveCircleId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const ChatSidebar: FC<Props> = ({ setActiveCircleId, activeCircleId }) => {
  const { me } = useAuthContext();
  const { data } = useUserCirclesQuery({
    variables: { id: me?.id! },
    skip: !me?.id,
  });

  const handleClickCircle = (id: number) => {
    setActiveCircleId(id);
  };

  return (
    <StyledSidebar>
      {data?.user?.circleUsers?.map((circleUser) => {
        const circle = circleUser.circle;
        return (
          <StyledCircleIcon
            key={circle.id}
            onClick={() => handleClickCircle(circle.id)}
            active={activeCircleId == circle.id}
          >
            <Img height="64px" src={circle.avatar || ""} />
          </StyledCircleIcon>
        );
      })}
    </StyledSidebar>
  );
};

export default ChatSidebar;
