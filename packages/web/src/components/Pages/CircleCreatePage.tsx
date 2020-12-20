import React, { FC } from "react";
import CircleCreateCard from "../Organisms/Cards/CircleCreateCard";
import styled from "styled-components";

import TwoColumn from "../Templates/TwoColumn";
import { Button } from "@chakra-ui/react";
import { useCreateCircleFrom } from "../../hooks/useCreateCircleForm";

const RightButton = styled.div`
  align-self: start;
`;

const CircleCreatePage: FC = () => {
  const formState = useCreateCircleFrom();

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
          >
            作成する
          </Button>
        </RightButton>
      </TwoColumn>
    </form>
  );
};

export default CircleCreatePage;
