import React, { FC } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import IconLink from '../../Atoms/Links/IconLink';
import { ReactComponent as Circleci } from '../../../assets/icons/circleci.svg';
import { ReactComponent as Chat } from '../../../assets/icons/chat.svg';
import { ReactComponent as Person } from '../../../assets/icons/person.svg';
import styled from 'styled-components';
import { COLOR } from '../../../constants/color';
import Me from '../../Molecules/Sidebar/Me';

const StyledSidebar = styled.div`
  background-color: ${COLOR['DARK_GREEN']};
  border-radius: 0 50px 50px 0;
  display: grid;
  grid-template-rows: 100px 80px 80px 80px 80px;
  height: 100vh;
  justify-content: right;
  padding-top: 50px;
  width: 20%;
`;

const LoginSidebar: FC = () => {
  const { logout, user } = useAuth0();
  return (
    <StyledSidebar>
      <Me user={user}/>
      <IconLink to="#" text="サークル一覧" bgColor={'WHITE'}><Circleci /></IconLink>
      <IconLink to="#" text="トークルーム"><Chat /></IconLink>
      <IconLink to="#" text="プロフィール"><Person /></IconLink>
      <IconLink
        to="#"
        text="ログアウト" 
        clickHandler={() => logout({ returnTo: window.location.origin })}
      >
        <Person />
      </IconLink>
    </StyledSidebar>
  );
};

export default LoginSidebar;