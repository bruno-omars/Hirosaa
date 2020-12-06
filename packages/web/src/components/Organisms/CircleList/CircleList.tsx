import React from "react";
import CircleCard from "../../Molecules/Cards/CircleCard";
import {
  Circles,
  Circle_Users_Aggregate_Fields,
  Maybe,
} from "../../../generated/graphql";

type Props = {
  circles: (Pick<
    Circles,
    "id" | "name" | "avatar" | "whatWeWillDo" | "mainRole"
  > & {
    circleUsers_aggregate: { __typename?: "circle_users_aggregate" } & {
      aggregate?: Maybe<
        { __typename?: "circle_users_aggregate_fields" } & Pick<
          Circle_Users_Aggregate_Fields,
          "count"
        >
      >;
    };
  })[];
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
