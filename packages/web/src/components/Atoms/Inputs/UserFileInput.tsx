import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as Person } from "../../../assets/icons/person.svg";
type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  accept: string;
  type: string;
  hidden: any;
  placeholder: string;
};

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  --avatar-size: 66px;

  display: block;
  width: var(--avatar-size);
  height: var(--avatar-size);
  flex-shrink: 0;

  border-radius: 100%;
`;

const StyledAvatarButton = styled.label`
  appearance: none;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #dedede66;
  color: #fff;
`;

const StyledFileInput = styled.input`
  height: 30px;
  width: 400px;
`;

const UserFileInput: FC<Props> = (props) => {
  return (
    <StyledDiv>
      <StyledAvatarButton>
        <Person />
        <StyledFileInput
          type={props.type}
          placeholder={props.placeholder}
          accept={props.accept}
          hidden={props.hidden}
          onChange={props.handleChange}
          name={props.name}
        />
      </StyledAvatarButton>
    </StyledDiv>
  );
};

export default UserFileInput;
