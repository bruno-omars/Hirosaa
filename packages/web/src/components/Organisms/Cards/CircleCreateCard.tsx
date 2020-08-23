import React, { FC } from "react";
import styled from "styled-components";
import DefaultInput from "../../Atoms/Inputs/DefaultInput";
import DefaultTextArea from "../../Atoms/TextArea/DefaultTextArea";
import DefaultTag from "../../Atoms/Tags/DefaultTag";
import FileInput from "../../Atoms/Inputs/FileInput";
import { Input } from "../../Pages/CircleCreatePage";

const Card = styled.div`
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  width: 70%;
`;

const Block = styled.div`
  margin-top: 40px;
`;

const StyledForm = styled.form``;

const Top = styled.div`
  display: grid;
  grid-template-rows: 20% 20% 20% 40%;
  height: 300px;
`;

const Buttom = styled.div`
  height: 60%;
`;

const StyledSubTitle = styled.h3`
  color: #717171;
  font-weight: 0.4em;
  margin-bottom: 8px;
`;

type Props = {
  inputs: Input;
  setInputs: React.Dispatch<React.SetStateAction<Input>>;
};

const CircleCreateCard: FC<Props> = (props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    props.setInputs({ ...props.inputs, [e.target.name]: e.target.value });
  };

  return (
    <Card>
      <StyledForm>
        <Top>
          <FileInput />
          <DefaultInput
            handleChange={handleChange}
            placeholder="サークル名"
            name="name"
          />
          <DefaultInput
            handleChange={() => {}}
            placeholder="募集の題名"
            name="title"
          />
          <DefaultTag name="アプリ" />
        </Top>
        <hr />
        <Buttom>
          <Block>
            <StyledSubTitle>何をするのか</StyledSubTitle>
            <DefaultTextArea
              handleChange={handleChange}
              placeholder="あなたのサークルでやることを記入してください"
              name="whatWeWillDo"
            />
          </Block>
          <Block>
            <StyledSubTitle>主な役割</StyledSubTitle>
            <DefaultTextArea
              handleChange={handleChange}
              placeholder="歓迎条件をご記入ください"
              name="mainRole"
            />
          </Block>
          <Block>
            <StyledSubTitle>使用する技術やアプリ</StyledSubTitle>
            <DefaultTextArea
              handleChange={() => {}}
              placeholder="使用する技術やアプリをご記入ください"
            />
          </Block>
        </Buttom>
      </StyledForm>
    </Card>
  );
};

export default CircleCreateCard;