import React, { FC, useCallback } from "react";
import styled from "styled-components";
import FileInput from "../../Atoms/Inputs/FileInput";
import { useSkillAndSubCategoryQuery } from "../../../generated/graphql";
import SkillPicker from "./SkillPicker";
import SubCategoryTags from "../Tags/SubCategoryTags";
import { Box, Grid, Heading, Input, Textarea } from "@chakra-ui/react";
import { COLOR } from "../../../constants/color";
import {
  DeepMap,
  FieldError,
  UseFormMethods,
} from "react-hook-form/dist/types";
import {
  CircleCreateForm,
  CircleCreateFormReturn,
} from "../../../hooks/useCreateCircleForm";

const Block = styled(Box)`
  margin-top: 40px;
  width: 100%;
`;

const StyledSubTitle = styled(Heading)`
  color: #717171;
  font-weight: 0.4em;
  margin-bottom: 8px;
`;

type Props = CircleCreateFormReturn;

const CircleCreateCard: FC<Props> = (props) => {
  const { data, error } = useSkillAndSubCategoryQuery();

  const inputAttrs = useCallback(
    (name: keyof CircleCreateForm) => ({
      ref: props.register({ required: true }),
      isInvalid: Boolean(props.errors[name]),
      name: name,
      borderColor: COLOR["BORDER_TEXT_INPUT"],
      focusBorderColor: COLOR["LIGHT_GREEN"],
      errorBorderColor: "crimson",
    }),
    [props]
  );

  console.log("errors", props.errors);

  return (
    <Box
      boxShadow={{ base: "xs", md: "lg" }}
      p={10}
      mb={7}
      w={{ base: "95%", md: "80%" }}
    >
      <Grid gridTemplateRows="20% 20% 20% 40%" h="300px">
        <FileInput />
        <Input {...inputAttrs("name")} placeholder="サークル名" />
        <Input {...inputAttrs("recruitTitle")} placeholder="募集の題名" />
        <div>
          <StyledSubTitle as="h3">カテゴリを選択</StyledSubTitle>
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
      </Grid>
      <hr />
      <Box h="60%">
        <Block>
          <StyledSubTitle as="h3">何をするのか</StyledSubTitle>
          <Textarea
            {...inputAttrs("whatWeWillDo")}
            placeholder="あなたのサークルでやることを記入してください"
          />
        </Block>
        <Block>
          <StyledSubTitle as="h3">主な役割</StyledSubTitle>
          <Textarea
            {...inputAttrs("mainRole")}
            placeholder="歓迎条件をご記入ください"
          />
        </Block>
        <Block>
          <StyledSubTitle as="h3">使用する技術やアプリ</StyledSubTitle>
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
      </Box>
    </Box>
  );
};

export default CircleCreateCard;
