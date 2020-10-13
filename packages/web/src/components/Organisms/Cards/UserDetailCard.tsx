import React, { FC, useMemo, Fragment } from "react";
import styled from "styled-components";
import { UserQuery } from "../../../generated/graphql";
import Avatar from "../../Atoms/Avatar/Default";
import { COLOR } from "../../../constants/color";
import SkillCards from "./SkillCards";
import DefaultTextArea from "../../Atoms/TextArea/DefaultTextArea";
import { Textarea } from "../../Pages/UserDetailPage";
import DefaultInput from "../../Atoms/Inputs/DefaultInput";
import UserFileInput from "../../Atoms/Inputs/UserFileInput";
import { ReactComponent as Person } from "../../../assets/icons/person.svg";
import SubCategoryTags from "../Tags/SubCategoryTags";
import { useSkillAndSubCategoryQuery } from "../../../generated/graphql";
type Props = {
  data: UserQuery;
  isEditing: boolean;
  textareas: Textarea;
  setTextareas: React.Dispatch<React.SetStateAction<Textarea>>;
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
  grid-template-columns: 80px 1fr;
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

const UserDetailCard: FC<Props> = ({
  data,
  isEditing,
  setTextareas,
  textareas,
  selectedSkills,
  setSkills,
}) => {
  const skillCardHeight = useMemo(
    () => data.user && Math.ceil(data.user?.UserSkills.length / 4) * 75,
    [data]
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    setTextareas({ ...textareas, [e.target.name]: e.target.value });
  };
  if (!data.user) return <p>ユーザーが存在しません</p>;

  const user = data.user;
  const skills = user.UserSkills.map((skill) => skill.Skill);
  console.log(user);
  return (
    <StyledCard>
      <StyledTop>
        {isEditing ? (
          <UserFileInput
            name="avatar"
            handleChange={handleChange}
            accept="image/png,image/jpeg,image/gif"
            type="file"
            hidden="hidden"
            placeholder="画像を選択してください"
          />
        ) : (
          <Avatar src={(user && user.avatar) || ""} size={66} />
        )}
        {isEditing ? (
          <DefaultInput
            name="name"
            handleChange={handleChange}
            placeholder="名前"
          />
        ) : (
          <h2>{user.name}</h2>
        )}
      </StyledTop>
      <hr />
      <StyledBlock>
        <StyledSubTitle>自己紹介</StyledSubTitle>
        {isEditing ? (
          <DefaultTextArea
            name="introduction"
            handleChange={handleChange}
            placeholder="入力する"
            areaSize="BASE"
          />
        ) : (
          <StyledDesc>{user.introduction}</StyledDesc>
        )}
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>興味のあること</StyledSubTitle>
        {isEditing ? (
          <DefaultTextArea
            name="interested_in"
            handleChange={handleChange}
            placeholder="入力する"
            areaSize="BASE"
          />
        ) : (
          <StyledDesc>{user.interested_in}</StyledDesc>
        )}
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>スキル一覧</StyledSubTitle>
        <StyledGrid height={skillCardHeight || 75}>
          {isEditing ? (
            skills ? (
              <StyledGrid height={skillCardHeight || 75}>
                <SkillCards
                  skills={skills}
                  selectedSkills={selectedSkills}
                  setSkills={setSkills}
                />
              </StyledGrid>
            ) : null
          ) : (
            <SkillCards skills={skills} />
          )}
        </StyledGrid>
      </StyledBlock>
    </StyledCard>
  );
};

export default UserDetailCard;
