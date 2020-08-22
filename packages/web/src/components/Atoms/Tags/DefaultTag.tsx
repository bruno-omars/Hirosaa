import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

type Props = {
  handleClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  name: string;
};

const Tag = styled.span`
  border-radius: 50px;
  background-color: ${COLOR["ORANGE"]}77;
  font-size: 10px;
  height: 10px;
  line-height: 10px;
  max-width: 50px;
  text-align: center;
  padding: 4px 20px;
`;

const DefaultTag: FC<Props> = (props) => {
  return <Tag onClick={props.handleClick}>{props.name}</Tag>;
};

export default DefaultTag;
