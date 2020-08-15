import React, { FC } from 'react';

import IconLink from '../../Atoms/Links/IconLink';
import { ReactComponent as Circleci } from '../../../assets/icons/circleci.svg';
import { ReactComponent as Chat } from '../../../assets/icons/chat.svg';
import { ReactComponent as Person } from '../../../assets/icons/person.svg';
import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const StyledSidebar = styled.div`
  background-color: ${COLOR['DARK_GREEN']};
  border-radius: 0 50px 50px 0;
  display: grid;
  grid-template-rows: 80px 80px 80px;
  height: 100vh;
  justify-content: right;
  padding-top: 50px;
  width: 20%;
`;

const LoginSidebar: FC = () => {
  return (
    <StyledSidebar>
      <IconLink to="#" text="サークル一覧"><Circleci /></IconLink>
      <IconLink to="#" text="トークルーム"><Chat /></IconLink>
      <IconLink to="#" text="プロフィール"><Person /></IconLink>
    </StyledSidebar>
  );
};

export default LoginSidebar;