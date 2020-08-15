import React, { FC } from 'react';
import styled from 'styled-components';

import CircleButton from '../../Atoms/Buttons/CircleButton';
import { ReactComponent as DownArrow } from '../../../assets/icons/down-arrow.svg';
import { COLOR } from '../../../constants/color';

const StyledMe = styled.div`
  align-items: center;
  color: ${COLOR['WHITE']};
  cursor: pointer;
  display: grid;
  fill: white;
  grid-template-columns: 30% 50% 20%;
  height: 80px;

  :hover {
    background-color: ${COLOR['LIGHT_GREEN']};
    border-radius: 50px;
  }
`;

const StyledText = styled.p`
  font-size: 1.3em;
`;

const Me: FC = () => {
  return (
    <StyledMe>
      <CircleButton clickHandler={() => {}} shadowDepth={'NONE'}>img</CircleButton>
      <div>
        <StyledText>ロピタル</StyledText>
        @ropital
      </div>
      <DownArrow />
    </StyledMe>
  );
};

export default Me;