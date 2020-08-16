import React, { FC, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import IconLink from '../../Atoms/Links/IconLink';
import { ReactComponent as Circleci } from '../../../assets/icons/circleci.svg';
import { ReactComponent as Chat } from '../../../assets/icons/chat.svg';
import { ReactComponent as Person } from '../../../assets/icons/person.svg';
import styled from 'styled-components';
import { COLOR } from '../../../constants/color';
import Me from '../../Molecules/Sidebar/Me';
import { useAuthContext } from '../../../provider/AuthContextProvider';

const StyledSidebar = styled.div`
  background-color: ${COLOR['DARK_GREEN']};
  border-radius: 0 50px 50px 0;
  height: 100vh;
  padding-top: 50px;
  width: 20%;
`;

const StyledList = styled.div`
  display: grid;
  grid-template-rows: 80px 80px 80px 80px;
  justify-content: right;
`;

const StyledMe = styled.div`
  margin: 0 auto;
  width: 90%;
  margin-bottom: 20px;
`

const LoginSidebar: FC = () => {
  const { logout, user } = useAuth0();
  const { useCase, setMe, me } = useAuthContext();

  useEffect(() => {
    setMe(useCase.setMe(user))
  }, []);

  console.log(me);
  
  return (
    <StyledSidebar>
      <StyledMe><Me user={user}/></StyledMe>
      <StyledList>
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
      </StyledList>
    </StyledSidebar>
  );
};

export default LoginSidebar;