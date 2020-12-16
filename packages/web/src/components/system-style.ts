import { avatarSize } from "./Atoms/Avatar/avatar";

export type HTMLStandardType = {
  cursor?: Cursor;
  borderRadius?: number | string;
};

export type AvatarSize = keyof typeof avatarSize;

export type Cursor =
  | "pointer"
  | "wait"
  | "help"
  | "auto"
  | "progress"
  | "text"
  | "grab"
  | "grabbing"
  | "default";
