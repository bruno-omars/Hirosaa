import React, { FC } from "react";
import DefaultTag from "../../Atoms/Tags/DefaultTag";
import { SubCategory } from "../../../generated/graphql";

type Props = {
  subCategories:
    | ({
        __typename?: "SubCategory" | undefined;
      } & Pick<SubCategory, "name" | "id">)[]
    | undefined;
};

const SubCategoryTags: FC<Props> = (props) => {
  const categories =
    props.subCategories &&
    props.subCategories.map((subCategory) => {
      return <DefaultTag name={subCategory.name} key={subCategory.id} />;
    });

  return <>{categories}</>;
};

export default SubCategoryTags;
