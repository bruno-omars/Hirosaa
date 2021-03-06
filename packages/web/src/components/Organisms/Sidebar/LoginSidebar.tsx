import React, { ComponentProps, FC, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { ReactComponent as Circleci } from "../../../assets/icons/circleci.svg";
import { ReactComponent as Pen } from "../../../assets/icons/pen.svg";
import { ReactComponent as Chat } from "../../../assets/icons/chat.svg";
import { ReactComponent as Person } from "../../../assets/icons/person.svg";
import { ReactComponent as Logout } from "../../../assets/icons/logout.svg";
import styled from "styled-components";
import Me from "../../Molecules/Sidebar/Me";
import { useAuthContext } from "../../../provider/AuthContextProvider";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";

const StyledMe = styled.div`
  margin: 0 auto;
  width: 90%;
  margin-bottom: 20px;
`;

const LoginSidebar: FC = () => {
  const { logout, user } = useAuth0();
  const { useCase, setMe, me } = useAuthContext();

  let history = useHistory();

  const onRedirectDetail = () => {
    history.push({
      pathname: `/user-detail/${me.id}`,
    });
  };

  useEffect(() => {
    setMe(useCase.setMe(user));
  }, [user, setMe, useCase]);

  const items: ComponentProps<typeof Sidebar>["items"] = [
    {
      to: "/circle",
      text: "サークル一覧",
      icon: Circleci,
    },
    {
      to: "/circle-new",
      text: "サークル作成",
      icon: Pen,
    },
    {
      to: "/chat",
      text: "トークルーム",
      icon: Chat,
    },
    {
      to: `/user-detail/${me.id}`,
      text: "プロフィール",
      icon: Person,
    },
    {
      text: "ログアウト",
      onClick: () => logout({ returnTo: window.location.origin }),
      icon: Logout,
    },
  ];

  return (
    <Sidebar items={items}>
      <StyledMe>
        <Me user={user} onRedirectDetail={onRedirectDetail} />
      </StyledMe>
    </Sidebar>
  );
};

export default LoginSidebar;
