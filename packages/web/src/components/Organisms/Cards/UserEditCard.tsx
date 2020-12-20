import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useSkillAndSubCategoryQuery } from "../../../generated/graphql";
import { COLOR } from "../../../constants/color";
import SkillPicker from "./SkillPicker";
import { UserEditInput } from "../../Pages/UserEditPage";
import FileInput from "../../Atoms/Inputs/FileInput";
import DefaultInput from "../../Atoms/Inputs/DefaultInput";
import DefaultTextArea from "../../Atoms/TextArea/DefaultTextArea";
import { Box } from "@chakra-ui/react";

type Props = {
  inputs: UserEditInput;
  setInputs: React.Dispatch<React.SetStateAction<UserEditInput>>;
  selectedSkills: number[];
  setSkills: React.Dispatch<React.SetStateAction<number[]>>;
};

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

const UserEditCard: FC<Props> = (props) => {
  const { data, error } = useSkillAndSubCategoryQuery();

  if (!data) {
    return <p>データの取得に失敗しました</p>;
  }

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
            areaSize="MAX"
            name="interestedIn"
            value={props.inputs.interestedIn}
          />
        </StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>スキル一覧</StyledSubTitle>
        <SkillPicker
          skills={data?.skills}
          selectedSkills={props.selectedSkills}
          setSkills={props.setSkills}
        />
      </StyledBlock>
    </Box>
  );
};

export default UserEditCard;
