import React, { FC } from 'react';
import styled from 'styled-components';

import CircleButton from '../../Atoms/Buttons/CircleButton';
import { ReactComponent as DownArrow } from '../../../assets/icons/down-arrow.svg';
import { COLOR } from '../../../constants/color';

const StyledMe = styled.div`
  color: ${COLOR['WHITE']};
  cursor: pointer;
  display: grid;
  fill: white;
  grid-template-columns: 30% 50% 20%;
  height: 80px;
  place-items: center;

  :hover {
    background-color: ${COLOR['LIGHT_GREEN']};
    border-radius: 50px;
  }
`;

const StyledText = styled.p`
  font-size: 1.3em;
`;

const StyledImage = styled.img`
  border-radius: 50px;
  height: 100%;
  width: 100%;
`;

type Props = {
  user: any;
};

const Me: FC<Props> = ({ user }) => {
  return (
    <StyledMe>
      <CircleButton clickHandler={() => {}} shadowDepth={'NONE'}>
        <StyledImage src={user.picture} />
      </CircleButton>
      <div>
        <StyledText>{user.nickname}</StyledText>
        {/* {user['https://hasura.io/jwt/claims']['x-hasura-user-id']} */}
        @ropital
      </div>
      <DownArrow />
    </StyledMe>
  );
};

export default Me;