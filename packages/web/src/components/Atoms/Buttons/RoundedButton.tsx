import React, { FC } from 'react';
import styled from 'styled-components';

import { StyledButton, Props } from './Default';

export const RADIUS_SIZE = {
  BASE: '50px'
}

export type RadiusSize = keyof typeof RADIUS_SIZE;

type RoundedButtonProps = Props & {
  borderRadius?: RadiusSize;
}

const StyledRoundedButton = styled(StyledButton)<Omit<RoundedButtonProps, 'clickHandler'>>`
  border-radius: ${({borderRadius = 'BASE'}) => RADIUS_SIZE[borderRadius]};
`;

const RoundedButton: FC<RoundedButtonProps> = (props) => {
  return (
    <StyledRoundedButton
      onClick={props.clickHandler}
      borderRadius={props.borderRadius || 'BASE'}
      buttonSize={props.buttonSize}
      shadowDepth={props.shadowDepth}
      bgColor={props.bgColor}
    >
      {props.children}
    </StyledRoundedButton>
  );
}

export default RoundedButton;