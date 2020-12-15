import React, { ComponentProps } from "react";
import { CircleCard } from "../../Molecules/Cards/CircleCard";

type Props = {
  circles: Array<ComponentProps<typeof CircleCard>["circle"]>;
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
