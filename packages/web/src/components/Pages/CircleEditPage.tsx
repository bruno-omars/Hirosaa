import React from "react";
import styled from "styled-components";
import CircleCreateCard from "../Organisms/Cards/CircleCreateCard";
import TwoColumn from "../Templates/TwoColumn";
import { Button } from "@chakra-ui/react";
import { useCreateCircleFrom } from "../../hooks/useCreateCircleForm";
import { useLocation } from "react-router-dom";
import { useEditCircleFrom } from "../../hooks/useEditCircleForm";

const RightButton = styled.div`
  align-self: start;
`;

const CircleEditPage: React.FC = () => {
  const formState = useEditCircleFrom();

  return (
    <form onSubmit={formState.handleSubmit(formState.onSubmit)}>
      <TwoColumn defaultStyle>
        <CircleCreateCard {...formState} />
        <RightButton>
          <Button
            isLoading={formState.isLoading}
            shadow="md"
            w="120px"
            colorScheme="teal"
            type="submit"
            buttonSize="SMALL"
          >
            更新する
          </Button>
        </RightButton>
      </TwoColumn>
    </form>
  );
};

export default CircleEditPage;
