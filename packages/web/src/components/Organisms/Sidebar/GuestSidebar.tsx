import React, { ComponentProps, FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { ReactComponent as Login } from "../../../assets/icons/login.svg";
import { ReactComponent as Pen } from "../../../assets/icons/pen.svg";
import Sidebar from "./Sidebar";

const GuestSidebar: FC = () => {
  const { loginWithRedirect } = useAuth0();
  const signupWithRedirect = () =>
    loginWithRedirect({
      screen_hint: "signup",
    });

  const items: ComponentProps<typeof Sidebar>["items"] = [
    {
      text: "ログイン",
      onClick: loginWithRedirect,
      icon: Login,
    },
    {
      text: "新規登録",
      onClick: signupWithRedirect,
      icon: Pen,
    },
  ];

  return <Sidebar items={items} />;
};

export default GuestSidebar;
