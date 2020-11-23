import React, { FC, ComponentProps, FormEvent } from "react";
import styled from "styled-components";
import DefaultInput from "./DefaultInput";

export const StyledInput = styled(DefaultInput)`
  padding-right: 40px;
  width: 100%;
`; //TODO: iconの大きさによって変える

const Wrapper = styled.form`
  position: relative;
`;

const IconWrapper = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  border: none;
  cursor: pointer;
  background-color: #fff;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
`;

type Props = {
  icon: JSX.Element;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
} & ComponentProps<typeof DefaultInput>;

const IconRightInput: FC<Props> = (props) => {
  const { icon, onSubmit, ...rest } = props;

  return (
    <Wrapper onSubmit={onSubmit}>
      <StyledInput {...rest} />
      <IconWrapper type="submit">{icon}</IconWrapper>
    </Wrapper>
  );
};

export default IconRightInput;
