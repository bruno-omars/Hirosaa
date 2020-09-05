import React, { FC } from "react";
import styled from "styled-components";
import DefaultInput from "../../Atoms/Inputs/DefaultInput";
import DefaultTextArea from "../../Atoms/TextArea/DefaultTextArea";
import FileInput from "../../Atoms/Inputs/FileInput";
import { Input } from "../../Pages/CircleCreatePage";
import { useSkillAndSubCategoryQuery } from "../../../generated/graphql";
import SkillCards from "./SkillCards";
import SubCategoryTags from "../Tags/SubCategoryTags";

const Card = styled.div`
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  width: 70%;
  margin-bottom: 40px;
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

type StyleGrid = {
  height: number;
};

const StyledGrid = styled.div<StyleGrid>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(${({ height }) => height}px, max-content);
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
            handleChange={handleChange}
            placeholder="募集の題名"
            name="recruit_title"
          />
          <div>
            <StyledSubTitle>カテゴリを選択</StyledSubTitle>
            {error ? (
              "カテゴリーの読み込みに失敗しました。リロードしてください。"
            ) : (
              <StyledGrid height={30}>
                <SubCategoryTags
                  subCategories={data?.SubCategory}
                  selectedCategory={props.selectedCategory}
                  setCategory={props.setCategory}
                />
              </StyledGrid>
            )}
          </div>
        </Top>
        <hr />
        <Buttom>
          <Block>
            <StyledSubTitle>何をするのか</StyledSubTitle>
            <DefaultTextArea
              handleChange={handleChange}
              placeholder="あなたのサークルでやることを記入してください"
              name="what_we_will_do"
            />
          </Block>
          <Block>
            <StyledSubTitle>主な役割</StyledSubTitle>
            <DefaultTextArea
              handleChange={handleChange}
              placeholder="歓迎条件をご記入ください"
              name="main_role"
            />
          </Block>
          <Block>
            <StyledSubTitle>使用する技術やアプリ</StyledSubTitle>
            {error ? (
              "スキルカードの読み込みに失敗しました。リロードしてください。"
            ) : data?.Skill ? (
              <StyledGrid height={Math.ceil(data.Skill.length / 4) * 85}>
                <SkillCards
                  skills={data?.Skill}
                  selectedSkills={props.selectedSkills}
                  setSkills={props.setSkills}
                />
              </StyledGrid>
            ) : (
              <></>
            )}
          </Block>
        </Buttom>
      </StyledForm>
    </Card>
  );
};

export default CircleCreateCard;
