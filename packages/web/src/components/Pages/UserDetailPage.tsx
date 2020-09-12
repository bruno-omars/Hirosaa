import React, { FC } from "react";
import { useLocation } from "react-router-dom";

type Params = {
  userId: number;
};

const UserDetailPage: FC = () => {
  const { state } = useLocation<Params>();
  const userId = state.userId;

  return <div>{userId}: Hello world</div>;
};

export default UserDetailPage;
