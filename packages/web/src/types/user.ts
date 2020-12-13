import { Maybe, Users } from "../generated/graphql";

export type MyUser = Maybe<
  Pick<Users, "id" | "avatar" | "name" | "introduction" | "interestedIn">
>;
