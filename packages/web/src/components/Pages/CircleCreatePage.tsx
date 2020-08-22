import React, { FC, useState } from "react";
import CircleCreateCard from "../Organisms/Cards/CircleCreateCard";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  place-items: center;
  padding-top: 60px;
`;

const RightButton = styled.div`
  align-self: start;
`;

const CircleCreatePage: FC = () => {
  return (
    <StyledPage>
      <CircleCreateCard />
      <RightButton>
        <RoundedButton clickHandler={() => {}} buttonSize="SMALL">
          保存する
        </RoundedButton>
      </RightButton>
    </StyledPage>
  );
};

export default CircleCreatePage;
