import React, { FC } from "react";
import DefaultTag from "../../Atoms/Tags/DefaultTag";
import { Sub_Categories } from "../../../generated/graphql";

type Props = {
  subCategories: Pick<Sub_Categories, "name" | "id">[] | undefined;
  selectedCategory: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};

const SubCategoryTags: FC<Props> = (props) => {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    props.setCategory(Number(e.currentTarget.id));
  };

  const categories =
    props.subCategories &&
    props.subCategories.map((subCategory) => {
      return (
        <DefaultTag
          name={subCategory.name}
          key={subCategory.id}
          id={subCategory.id.toString()}
          handleClick={handleClick}
          bgColor={
            props.selectedCategory === subCategory.id ? "ORANGE" : "WHITE"
          }
        />
      );
    });

  return <>{categories}</>;
};

export default SubCategoryTags;
