import React, { FC } from "react";
import { Sub_Categories } from "../../../generated/graphql";
import { Grid, Tag, TagLabel } from "@chakra-ui/react";

type Props = {
  subCategories: Pick<Sub_Categories, "name" | "id">[] | undefined;
  selectedCategory: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};

const SubCategoryTags: FC<Props> = ({
  subCategories,
  selectedCategory,
  setCategory,
}) => {
  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setCategory(Number(e.currentTarget.id));
  };

  return (
    <Grid gridTemplateColumns="repeat(auto-fill, 140px)" gridAutoRows="40px">
      {subCategories &&
        subCategories.map((subCategory) => {
          return (
            <Tag
              cursor="pointer"
              borderRadius="full"
              colorScheme="orange"
              w="120px"
              h="30px"
              id={subCategory.id.toString()}
              onClick={onClick}
              variant={
                selectedCategory === subCategory.id ? "solid" : "outline"
              }
            >
              <TagLabel>{subCategory.name}</TagLabel>
            </Tag>
          );
        })}
    </Grid>
  );
};

export default SubCategoryTags;
