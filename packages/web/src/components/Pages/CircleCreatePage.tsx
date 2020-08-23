import React, { FC, useState, useEffect } from "react";
import CircleCreateCard from "../Organisms/Cards/CircleCreateCard";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import { useInsertCircleMutation } from "../../generated/graphql";

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  place-items: center;
  padding-top: 60px;
`;

const RightButton = styled.div`
  align-self: start;
`;

export type Input = {
  name: string;
  recruitTitle: string;
  whatWeWillDo: string;
  mainRole: string;
};

const CircleCreatePage: FC = () => {
  const [inputs, setInputs] = useState<Input>({
    name: "",
    recruitTitle: "",
    whatWeWillDo: "",
    mainRole: "",
  });
  const [buttonText, setText] = useState("作成する");

  const [insertCircle, { data }] = useInsertCircleMutation();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    insertCircle({
      variables: {
        ...inputs,
      },
    });
  };

  useEffect(() => {
    if (data?.insert_Circle) {
      setText("作成しました");
    }
  }, [data]);

  return (
    <StyledPage>
      <CircleCreateCard inputs={inputs} setInputs={setInputs} />
      <RightButton>
        <RoundedButton clickHandler={handleClick} buttonSize="SMALL">
          {buttonText}
        </RoundedButton>
      </RightButton>
    </StyledPage>
  );
};

export default CircleCreatePage;
