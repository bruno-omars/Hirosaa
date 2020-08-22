import React, { FC, useState } from "react";
import CircleCreateCard from "../Organisms/Cards/CircleCreateCard";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleCreatePage: FC = () => {
  const [teamName, setTeamName] = useState("");

  return (
    <StyledPage>
      <CircleCreateCard />
    </StyledPage>
  );
};

export default CircleCreatePage;
