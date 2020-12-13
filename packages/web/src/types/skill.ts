import { Skills } from "../generated/graphql";

export type MySkill = Pick<Skills, "id" | "avatar" | "name">;

export type MySkills = Array<MySkill>;

export type MyObjectArraySkills = Array<{ skill: MySkill }>;
