import React, { FC } from 'react';
import styled from 'styled-components';

import { Props, StyledLink } from './Default';

type IconLinkProps = Props & {
  text: string;
};

const StyledIconLink = styled(StyledLink)`
  display: grid;
  grid-template-columns: 30% 70%;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
`;

const IconLink: FC<IconLinkProps> = (props) => {
  return (
    <StyledIconLink 
      to={props.to}
    >
      <Center>
        {props.children}
      </Center>
      {props.text}
    </StyledIconLink>
  );
};

export default IconLink;