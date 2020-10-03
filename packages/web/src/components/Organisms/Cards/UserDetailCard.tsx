import React, { FC } from "react";
import styled from "styled-components";
import { User } from "../../../generated/graphql";
import Avatar from "../../Atoms/Avatar/Default";
import { COLOR } from "../../../constants/color";

type Props = {
  user: {
    __typename?: "User" | undefined;
  } & Pick<User, "id" | "avatar" | "name" | "introduction" | "interested_in">;
};

const StyledCard = styled.div`
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  width: 70%;
  margin-bottom: 40px;
`;

const StyledTop = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledBlock = styled.div`
  margin-top: 40px;
`;

const StyledSubTitle = styled.h3`
  color: ${COLOR.TEXT_LIGHT};
  font-weight: 0.4em;
  margin-bottom: 8px;
`;

const StyledDesc = styled.p`
  color: ${COLOR.TEXT_DARK};
`;

const UserDetailCard: FC<Props> = ({ user }) => {
  return (
    <StyledCard>
      <StyledTop>
        <Avatar src={user.avatar || ""} size={66} />
        <h2>{user.name}</h2>
      </StyledTop>
      <hr />
      <StyledBlock>
        <StyledSubTitle>自己紹介</StyledSubTitle>
        <StyledDesc>{user.introduction}</StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>興味のあること</StyledSubTitle>
        <StyledDesc>{user.interested_in}</StyledDesc>
      </StyledBlock>
    </StyledCard>
  );
};

export default UserDetailCard;
