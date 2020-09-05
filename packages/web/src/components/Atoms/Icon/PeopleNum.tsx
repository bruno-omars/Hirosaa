import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as People } from "../../../assets/icons/people.svg";

const Wrapper = styled.div`
  align-items: center;
  color: #606060;
  display: flex;
  fill: #606060;
  font-size: 12px;
  width: 60px;
  justify-content: space-around;
`;

type Props = {
  count: number;
};

const PeopleNum: FC<Props> = ({ count, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <People height="20px" width="20px" />
      {count}人
    </Wrapper>
  );
};

export default PeopleNum;
