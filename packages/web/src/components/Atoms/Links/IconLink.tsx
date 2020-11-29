import React, { FC } from "react";
import styled from "styled-components";
import { Props, StyledLink } from "./Default";
import { useRouteMatch } from "react-router-dom";
import { isConstructSignatureDeclaration } from "typescript";
type IconLinkProps = Props & {
  text: string;
  activeOnlyWhenExact?: boolean;
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
  const selected = useRouteMatch({
    path: props.to,
    exact: props.activeOnlyWhenExact,
  });

  return (
    <StyledIconLink
      bgcolor={selected ? "WHITE" : "DARK_GREEN"}
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
