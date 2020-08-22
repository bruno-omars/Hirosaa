import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import IconLink from "../../Atoms/Links/IconLink";
import { ReactComponent as Login } from "../../../assets/icons/login.svg";
import { ReactComponent as Pen } from "../../../assets/icons/pen.svg";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

const StyledSidebar = styled.div`
  background-color: ${COLOR["DARK_GREEN"]};
  border-radius: 0 50px 50px 0;
  display: grid;
  grid-template-rows: 80px 80px;
  height: 100vh;
  justify-content: right;
  padding-top: 50px;
  width: 100%;
`;

const GuestSidebar: FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledSidebar>
      <IconLink to="#" text="ログイン" clickHandler={loginWithRedirect}>
        <Login />
      </IconLink>
      <IconLink
        to="#"
        text="新規登録"
        clickHandler={() =>
          loginWithRedirect({
            screen_hint: "signup",
          })
        }
      >
        <Pen />
      </IconLink>
    </StyledSidebar>
  );
};

export default GuestSidebar;
