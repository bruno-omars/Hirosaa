import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLOR } from "../../../constants/color";

export type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const StyledButton = styled.button<Omit<Props, "clickHandler">>`
  background-color: ${COLOR.ORANGE};
  border-radius: 50px;
  text-decoration: none;
  padding: 4px 8px;
`;

const NewMessageButton: FC<Props> = (props) => {
  return (
    <StyledButton {...props}>
      <div>あたらしいメッセージがあります</div>
    </StyledButton>
  );
};

export default NewMessageButton;
