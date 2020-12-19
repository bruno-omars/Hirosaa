import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxStagesList from "../../Molecules/Lists/CheckBoxStagesList";
import { useCategoriesQuery } from "../../../generated/graphql";
import Spinner from "../../Atoms/Indicator/Spinner";
import { Grid, Heading } from "@chakra-ui/react";

type Props = {
  selectedSubcategories: number[];
  setSubCategories: React.Dispatch<React.SetStateAction<number[]>>;
};

const SelectCategoryCard: FC<Props> = ({
  selectedSubcategories,
  setSubCategories,
}) => {
  const { data, loading, error } = useCategoriesQuery();

  if (loading) return <Spinner />;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <Grid
      boxShadow="base"
      gridTemplateRows="40px 1fr"
      gridTemplateColumns="1fr"
      p="20px"
      h="fit-content"
      w={{ base: "100%", md: "80%" }}
      mb={{ base: "30px", md: "0" }}
    >
      <Heading as="h4" fontSize="1.2rem" textAlign="center">
        カテゴリー選択
      </Heading>
      {data?.parentCategories.map((parentCategory) => {
        return (
          <CheckBoxStagesList
            parentItem={parentCategory}
            childrenItems={parentCategory.subCategories}
            key={parentCategory.id}
            selectedChildrenIds={selectedSubcategories}
            setChildrenIds={setSubCategories}
          />
        );
      })}
    </Grid>
  );
};

export default SelectCategoryCard;
