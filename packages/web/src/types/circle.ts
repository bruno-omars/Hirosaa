import {
  Circles,
  Circle_Users_Aggregate_Fields,
  Maybe,
  UserQuery,
} from "../generated/graphql";

export type MyCircle = Pick<
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
};

export type MyCircles = Array<MyCircle>;

export type MyObjectArrayCircles = Array<{ circle: MyCircle }>;
