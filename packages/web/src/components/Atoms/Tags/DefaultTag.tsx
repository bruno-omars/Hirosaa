import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

type Props = {
  handleClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  bgColor?: keyof typeof COLOR;
  name: string;
  id: string;
};

const Tag = styled.span<Omit<Props, "handleClick" | "name" | "id">>`
  border-radius: 50px;
  background-color: ${({ bgColor = "ORANGE" }) => COLOR[bgColor]}77;
  ${({ bgColor = "ORANGE" }) =>
    bgColor === "WHITE" ? "border: 1px solid rgba(0, 0, 0, 0.4)" : ""};
  cursor: pointer;
  font-size: 10px;
  height: 10px;
  line-height: 10px;
  width: 70px;
  text-align: center;
  padding: 4px 20px;
`;

const DefaultTag: FC<Props> = (props) => {
  return (
    <Tag id={props.id} onClick={props.handleClick} bgColor={props.bgColor}>
      {props.name}
    </Tag>
  );
};

export default DefaultTag;
