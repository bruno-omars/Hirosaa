import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

export const SIZE = {
  LARGE: { H: "200px", W: "400px" },
  MEDIUM: { H: "200px", W: "350px" },
  BASE: { H: "100px", W: "350px" },
  SMALL: { H: "40px", W: "150px" },
  MAX: { H: "200px", W: "100%" },
};

type Props = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  areaSize?: keyof typeof SIZE;
  name?: string;
  value: string;
};

const StyledTextArea = styled.textarea<Omit<Props, "onChange">>`
  box-sizing: border-box;
  border: 1px solid #707070;
  border-radius: 4px;
  color: #00000f;
  font: 15px/24px sans-serif;
  height: ${({ areaSize = "BASE" }) => SIZE[areaSize].H};
  letter-spacing: 1px;
  padding: 0.3em;
  resize: none;
  transition: 0.3s;
  width: ${({ areaSize = "BASE" }) => SIZE[areaSize].W};

  :focus {
    border: 1px solid ${COLOR["LIGHT_GREEN"]};
    outline: none;
  }
`;

const DefaultTextArea: FC<Props> = (props) => {
  return <StyledTextArea {...props} />;
};

export default DefaultTextArea;
