import React, { FC } from "react";
import styled from "styled-components";

const StyledFileInput = styled.input`
  height: 30px;
  width: 400px;
`;

const FileInput: FC = () => {
  return <StyledFileInput type="file" placeholder="画像を選択する" />;
};

export default FileInput;
