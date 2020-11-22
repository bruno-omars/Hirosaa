import React from "react";
import CircleCard from "../../Molecules/Cards/CircleCard";
import { Circles } from "../../../generated/graphql";

type Props = {
  circles:
    | ({
        __typename?: "Skills" | undefined | string;
      } & Pick<Circles, "id" | "name" | "avatar">)[]
    | undefined;
};

export const CircleList: React.FC<Props> = ({ circles }) => {
  return (
    <>
      {circles != null
        ? circles?.map((circle) => (
            <CircleCard circle={circle} key={circle.id} />
          ))
        : null}
    </>
  );
};
