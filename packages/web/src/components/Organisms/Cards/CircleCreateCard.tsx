import React, { FC, useMemo } from "react";
import styled from "styled-components";
import DefaultInput from "../../Atoms/Inputs/DefaultInput";
import DefaultTextArea from "../../Atoms/TextArea/DefaultTextArea";
import FileInput from "../../Atoms/Inputs/FileInput";
import { Input } from "../../Pages/CircleCreatePage";
import { useSkillAndSubCategoryQuery } from "../../../generated/graphql";
import SkillPicker from "./SkillPicker";
import SubCategoryTags from "../Tags/SubCategoryTags";
import { Box } from "@chakra-ui/react";

const Block = styled.div`
  margin-top: 40px;
  width: 100%;
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
  selectedSkills: number[];
  setSkills: React.Dispatch<React.SetStateAction<number[]>>;
  selectedCategory: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};

const CircleCreateCard: FC<Props> = (props) => {
  const { data, error } = useSkillAndSubCategoryQuery();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    props.setInputs({ ...props.inputs, [e.target.name]: e.target.value });
  };

  return (
    <Box
      boxShadow={{ base: "xs", md: "lg" }}
      p={10}
      mb={7}
      w={{ base: "95%", md: "80%" }}
    >
      <StyledForm>
        <Top>
          <FileInput />
          <DefaultInput
            onChange={handleChange}
            placeholder="サークル名"
            name="name"
            value={props.inputs.name}
            inputSize="MAX"
          />
          <DefaultInput
            onChange={handleChange}
            placeholder="募集の題名"
            inputSize="MAX"
            name="recruitTitle"
            value={props.inputs.recruitTitle}
          />
          <div>
            <StyledSubTitle>カテゴリを選択</StyledSubTitle>
            {error ? (
              "カテゴリーの読み込みに失敗しました。リロードしてください。"
            ) : (
              <SubCategoryTags
                subCategories={data?.subCategories}
                selectedCategory={props.selectedCategory}
                setCategory={props.setCategory}
              />
            )}
          </div>
        </Top>
        <hr />
        <Buttom>
          <Block>
            <StyledSubTitle>何をするのか</StyledSubTitle>
            <DefaultTextArea
              onChange={handleChange}
              placeholder="あなたのサークルでやることを記入してください"
              areaSize="MAX"
              name="whatWeWillDo"
              value={props.inputs.whatWeWillDo}
            />
          </Block>
          <Block>
            <StyledSubTitle>主な役割</StyledSubTitle>
            <DefaultTextArea
              onChange={handleChange}
              placeholder="歓迎条件をご記入ください"
              areaSize="MAX"
              name="mainRole"
              value={props.inputs.mainRole}
            />
          </Block>
          <Block>
            <StyledSubTitle>使用する技術やアプリ</StyledSubTitle>
            {error ? (
              "スキルカードの読み込みに失敗しました。リロードしてください。"
            ) : data?.skills ? (
              <SkillPicker
                skills={data.skills}
                selectedSkills={props.selectedSkills}
                setSkills={props.setSkills}
              />
            ) : (
              <></>
            )}
          </Block>
        </Buttom>
      </StyledForm>
    </Box>
  );
};

export default CircleCreateCard;
