import React, { FC, ComponentProps } from "react";
import styled from "styled-components";
import DefaultInput from "./DefaultInput";

export const StyledInput = styled(DefaultInput)`
  padding-right: 20px;
  width: 100%;
`; //TODO: iconの大きさによって変える

const Wrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
`;

type Props = {
  icon: JSX.Element;
  iconClickHandler?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
} & ComponentProps<typeof DefaultInput>;

const IconRightInput: FC<Props> = (props) => {
  const { icon, iconClickHandler, ...rest } = props;

  return (
    <Wrapper>
      <StyledInput {...rest} />
      <IconWrapper onClick={iconClickHandler}>{icon}</IconWrapper>
    </Wrapper>
  );
};

export default IconRightInput;
