import React, { FC } from "react";
import styled from "styled-components";
import DefaultInput from "../../Atoms/Inputs/DefaultInput";
import DefaultTextArea from "../../Atoms/TextArea/DefaultTextArea";
import DefaultTag from "../../Atoms/Tags/DefaultTag";
import FileInput from "../../Atoms/Inputs/FileInput";

const Card = styled.div`
  margin: 60px 0;
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

const CircleCreateCard: FC = () => {
  return (
    <Card>
      <StyledForm>
        <Top>
          <FileInput />
          <DefaultInput handleChange={() => {}} placeholder="サークル名" />
          <DefaultInput handleChange={() => {}} placeholder="募集の題名" />
          <DefaultTag name="アプリ" />
        </Top>
        <hr />
        <Buttom>
          <Block>
            <h3>何をするのか</h3>
            <DefaultTextArea
              handleChange={() => {}}
              placeholder="あなたのサークルでやることを記入してください"
            />
          </Block>
          <Block>
            <h3>主な役割</h3>
            <DefaultTextArea
              handleChange={() => {}}
              placeholder="歓迎条件をご記入ください"
            />
          </Block>
          <Block>
            <h3>使用する技術やアプリ</h3>
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
