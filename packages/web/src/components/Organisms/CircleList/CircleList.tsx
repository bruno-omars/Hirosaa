import React from "react";
import { CircleCard } from "../../Molecules/Cards/CircleCard";
import {
  Circles,
  Circle_Users_Aggregate_Fields,
  Maybe,
} from "../../../generated/graphql";
import { MyCircles, MyObjectArrayCircles } from "../../../types/circle";

type Props = {
  circles: MyObjectArrayCircles;
};

export const CircleList: React.FC<Props> = ({ circles }) => {
  return (
    <>
      {circles != null
        ? circles?.map((circle) => (
            <CircleCard circle={circle.circle} key={circle.circle.id} />
          ))
        : null}
    </>
  );
};
