import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { COLOR } from '../../../constants/color';

export const BUTTON_SIZE = {
  LARGE: { H: '60px', W: '400px' },
  MEDIUM: { H: '60px', W: '380px' },
  BASE: { H: '60px', W: '260px' },
  SMALL: { H: '40px', W: '150px' },
};

// TODO: カードやボタンによって名前と深さを決めるようにする
export const SHADOW_DEPTH = { 
  LERGE: css`box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26)`,
  MIDIUM: css`box-shadow: 0 2px 7px rgba(0, 0, 0, 0.26)`,
  BASE: css`box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18)`,
  SMALL: css`box-shadow: 0 2px 0.3px rgba(0, 0, 0, 0.10)`,
  NONE: css`box-shadow: none`,
};

export type ButtonSize = keyof typeof BUTTON_SIZE;
export type Color = keyof typeof COLOR;
export type ShadowDepth = keyof typeof SHADOW_DEPTH;

export type Props = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonSize?: ButtonSize;
  bgColor?: Color;
  shadowDepth?: ShadowDepth;
};

export const StyledButton = styled.button<Omit<Props, 'clickHandler'>>`
  background-color: ${({bgColor = 'LIGHT_GREEN'}) => COLOR[bgColor]};
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: ${({buttonSize = 'BASE'}) => BUTTON_SIZE[buttonSize].H};
  ${({shadowDepth = 'BASE'}) => SHADOW_DEPTH[shadowDepth]};
  width: ${({buttonSize = 'BASE'}) => BUTTON_SIZE[buttonSize].W};
`;

const Default: FC<Props> = (props) => {
  return (
    <StyledButton 
      onClick={props.clickHandler} 
      buttonSize={props.buttonSize}
      shadowDepth={props.shadowDepth}
      bgColor={props.bgColor}
    >
      {props.children}
    </StyledButton>
  );
};

export default Default;
