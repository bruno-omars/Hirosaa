import React, { FC } from "react";
import styled from "styled-components";

import media from "styled-media-query";
import { useMedia } from "../../../hooks/useMedia";

import { Props, StyledLink } from "./Default";
import { useRouteMatch } from "react-router-dom";

type IconLinkProps = Props & {
  text: string;
  activeOnlyWhenExact?: boolean;
};

const StyledIconLink = styled(StyledLink)`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100%;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`;

const Center = styled.div`
  display: flex;
  align-items: center;
`;

const IconLink: FC<IconLinkProps> = (props) => {
  const selected = useRouteMatch({
    path: props.to,
    exact: props.activeOnlyWhenExact,
  });

  const { IS_PC } = useMedia();

  if (!IS_PC) {
    return (
      <StyledIconLink
        bgcolor={selected ? "WHITE" : "DARK_GREEN"}
        size={props.size}
        to={props.to}
        onClick={props.onClick}
      >
        <Center>{props.children}</Center>
      </StyledIconLink>
    );
  }

  return (
    <StyledIconLink
      bgcolor={selected ? "WHITE" : "DARK_GREEN"}
      size={props.size}
      to={props.to}
      onClick={props.onClick}
    >
      <Center>{props.children}</Center>
      {props.text}
    </StyledIconLink>
  );
};

export default IconLink;
