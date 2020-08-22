import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

type Props = {
  handleClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  name: string;
};

const Tag = styled.span`
  border-radius: 50px;
  padding: 4px 20px;
  font-size: 10px;
  background-color: ${COLOR["ORANGE"]}77;
`;

const DefaultTag: FC<Props> = (props) => {
  return <Tag onClick={props.handleClick}>{props.name}</Tag>;
};

export default DefaultTag;
