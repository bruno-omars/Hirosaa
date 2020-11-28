import React, { FC, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Props, StyledLink } from "./Default";

type IconLinkProps = Props & {
  text: string;
  selectedLinkName?: string;
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
      bgcolor={props.selectedLinkName === props.text ? "WHITE" : "DARK_GREEN"}
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
