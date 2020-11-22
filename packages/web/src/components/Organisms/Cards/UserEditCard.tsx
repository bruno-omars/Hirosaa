import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useSkillAndSubCategoryQuery } from "../../../generated/graphql";
import { COLOR } from "../../../constants/color";
import SkillCards from "./SkillCards";
import { UserEditInput } from "../../Pages/UserEditPage";
import FileInput from "../../Atoms/Inputs/FileInput";
import DefaultInput from "../../Atoms/Inputs/DefaultInput";
import DefaultTextArea from "../../Atoms/TextArea/DefaultTextArea";

type Props = {
  inputs: UserEditInput;
  setInputs: React.Dispatch<React.SetStateAction<UserEditInput>>;
  selectedSkills: number[];
  setSkills: React.Dispatch<React.SetStateAction<number[]>>;
};

const StyledCard = styled.div`
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  width: 70%;
  margin-bottom: 40px;
`;

const StyledTop = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledBlock = styled.div`
  margin-top: 40px;
`;

const StyledSubTitle = styled.h3`
  color: ${COLOR.TEXT_LIGHT};
  font-weight: 0.4em;
  margin-bottom: 8px;
`;

const StyledDesc = styled.p`
  color: ${COLOR.TEXT_DARK};
`;

type StyleGrid = {
  height: number;
};

const StyledGrid = styled.div<StyleGrid>`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(${({ height }) => height}px, max-content);
`;

const UserEditCard: FC<Props> = (props) => {
  const { data, error } = useSkillAndSubCategoryQuery();
  const skillCardHeight = useMemo(
    () => data && Math.ceil(data.skills.length / 4) * 75,
    [data]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    props.setInputs({ ...props.inputs, [e.target.name]: e.target.value });
  };

  return (
    <StyledCard>
      <StyledTop>
        <FileInput />
        <DefaultInput
          onChange={handleChange}
          placeholder="ユーザ名"
          name="name"
          value={props.inputs.name}
          inputSize="MAX"
        />
      </StyledTop>
      <hr />
      <StyledBlock>
        <StyledSubTitle>自己紹介</StyledSubTitle>
        <StyledDesc>
          <DefaultTextArea
            onChange={handleChange}
            placeholder="自己紹介を記入してください"
            name="introduction"
            value={props.inputs.introduction}
            areaSize="MAX"
          />
        </StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>興味のあること</StyledSubTitle>
        <StyledDesc>
          <DefaultTextArea
            onChange={handleChange}
            placeholder="自己紹介を記入してください"
            name="interested_in"
            value={props.inputs.interested_in}
            areaSize="MAX"
          />
        </StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>スキル一覧</StyledSubTitle>
        <StyledGrid height={skillCardHeight || 75}>
          <SkillCards
            skills={data?.skills}
            selectedSkills={props.selectedSkills}
            setSkills={props.setSkills}
          />
        </StyledGrid>
      </StyledBlock>
    </StyledCard>
  );
};

export default UserEditCard;
