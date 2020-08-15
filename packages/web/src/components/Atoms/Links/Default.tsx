import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR } from '../../../constants/color';

export const BUTTON_SIZE = {
  LARGE: { H: '60px', W: '400px' },
  MEDIUM: { H: '60px', W: '380px' },
  BASE: { H: '50px', W: '180px' },
  SMALL: { H: '40px', W: '150px' },
};

type ButtonSize = keyof typeof BUTTON_SIZE;
type Color = keyof typeof COLOR;

export type Props = {
  to: string;
  bgColor?: Color;
  size?: ButtonSize;
};

export const StyledLink = styled(Link)<Omit<Props, 'to'>>`
  background-color: ${({bgColor = 'LIGHT_GREEN'}) => COLOR[bgColor]};
  border-radius: 50px 0 0 50px;
  color: ${({bgColor = 'LIGHT_GREEN'}) => bgColor === 'LIGHT_GREEN' ? COLOR['WHITE'] : COLOR['LIGHT_GREEN']};
  display: inline-block;
  fill: ${({bgColor = 'LIGHT_GREEN'}) => bgColor === 'LIGHT_GREEN' ? COLOR['WHITE'] : COLOR['LIGHT_GREEN']};
  height: ${({size = 'BASE'}) => BUTTON_SIZE[size].H};
  line-height: ${({size = 'BASE'}) => BUTTON_SIZE[size].H};
  padding-left: 20px;
  text-decoration: none;
  width: ${({size = 'BASE'}) => BUTTON_SIZE[size].W};
`;

const DefaultLink: FC<Props> = (props) => {
  return (
    <StyledLink
      bgColor={props.bgColor}
      size={props.size}
      to={props.to}
    >
      {props.children}
    </StyledLink>
  );
};

export default DefaultLink;