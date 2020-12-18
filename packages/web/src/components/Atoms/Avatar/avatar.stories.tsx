import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Avatar } from "./avatar";

export default {
  title: "Avatar",
  component: Avatar,
} as Meta;

const sizes = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"] as const;
export const WithSizes = () => {
  return (
    <div>
      {sizes.map((size) => (
        <Avatar
          size={size}
          src="http://flat-icon-design.com/f/f_object_149/s256_f_object_149_0bg.png"
        />
      ))}
    </div>
  );
};

/**
 *  onClickが渡された時, デフォルトでカーソルがポインターに変わる
 */
export const WithOnClick = () => {
  return (
    <Avatar
      onClick={() => console.log("Hello")}
      src="http://flat-icon-design.com/f/f_object_153/s256_f_object_153_0bg.png"
    />
  );
};
