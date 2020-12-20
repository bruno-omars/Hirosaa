import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { useSkillAndSubCategoryQuery } from "../../../generated/graphql";
import { COLOR } from "../../../constants/color";
import SkillPicker from "./SkillPicker";
import { Box, Input, Textarea, Text, Grid } from "@chakra-ui/react";
import {
  UserEditFormReturn,
  UserEditInput,
} from "../../../hooks/useEditUserForm";
import { FileUpload } from "../../Molecules/FileUpload";

type Props = UserEditFormReturn;

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

const UserEditCard: FC<Props> = (props) => {
  const { data, error } = useSkillAndSubCategoryQuery();

  const inputAttrs = useCallback(
    (name: keyof UserEditInput) => ({
      ref: props.register({ required: true }),
      isInvalid: Boolean(props.errors[name]),
      name: name,
      borderColor: COLOR["BORDER_TEXT_INPUT"],
      focusBorderColor: COLOR["LIGHT_GREEN"],
      errorBorderColor: "crimson",
    }),
    [props]
  );

  return (
    <Box
      boxShadow={{ base: "xs", md: "lg" }}
      p={10}
      mb={7}
      w={{ base: "95%", md: "80%" }}
    >
      <Grid gridTemplateRows="1fr 1fr" alignItems="center" mb="20px">
        <FileUpload title="アイコン" namae={props.getValues("name")} />
        <Input {...inputAttrs("name")} placeholder="ユーザ名" name="name" />
      </Grid>
      <hr />
      <StyledBlock>
        <StyledSubTitle>自己紹介</StyledSubTitle>
        <StyledDesc>
          <Textarea
            {...inputAttrs("introduction")}
            placeholder="自己紹介を記入してください"
          />
        </StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>興味のあること</StyledSubTitle>
        <StyledDesc>
          <Textarea
            {...inputAttrs("interestedIn")}
            placeholder="自己紹介を記入してください"
            name="interestedIn"
          />
        </StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>スキル一覧</StyledSubTitle>
        {data?.skills ? (
          <SkillPicker
            skills={data?.skills}
            selectedSkills={props.selectedSkills}
            setSkills={props.setSkills}
          />
        ) : (
          <Text>スキルの取得に失敗しました。リロードしてください</Text>
        )}
      </StyledBlock>
    </Box>
  );
};

export default UserEditCard;
