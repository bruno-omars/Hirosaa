import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import UserEditCard from "../Organisms/Cards/UserEditCard";
import TwoColumn from "../Templates/TwoColumn";
import React from "react";
import { useEditUserForm } from "../../hooks/useEditUserForm";

const RightButton = styled.div`
  align-self: start;
`;

const UserEditPage: React.FC = () => {
  const formState = useEditUserForm();

  return (
    <form onSubmit={formState.handleSubmit(formState.onSubmit)}>
      <TwoColumn defaultStyle>
        <UserEditCard
          {...formState}
          selectedSkills={formState.selectedSkills}
          setSkills={formState.setSkills}
        />
        <RightButton>
          <Button
            type="submit"
            shadow="md"
            w="120px"
            colorScheme="teal"
            isLoading={formState.isLoading}
          >
            更新する
          </Button>
        </RightButton>
      </TwoColumn>
    </form>
  );
};

export default UserEditPage;
