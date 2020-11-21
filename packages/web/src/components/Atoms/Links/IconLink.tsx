import React, { FC } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { useMedia } from "../../../hooks/useMedia";

import { Props, StyledLink } from "./Default";

type IconLinkProps = Props & {
  text: string;
};

const StyledIconLink = styled(StyledLink)`
  display: grid;
  grid-template-columns: 30% 70%;
  width: calc(100% - 20px);

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`;

const Center = styled.div`
  display: flex;
  align-items: center;
`;

const IconLink: FC<IconLinkProps> = (props) => {
  const Media = useMedia();
  const isPC = Media.pc.matches;

  if (!isPC) {
    return (
      <StyledIconLink
        bgcolor={props.bgcolor}
        size={props.size}
        to={props.to}
        onClick={props.clickHandler}
      >
        <Center>{props.children}</Center>
      </StyledIconLink>
    );
  }

  return (
    <StyledIconLink
      bgcolor={props.bgcolor}
      size={props.size}
      to={props.to}
      onClick={props.clickHandler}
    >
      <Center>{props.children}</Center>
      {props.text}
    </StyledIconLink>
  );
};

export default IconLink;
