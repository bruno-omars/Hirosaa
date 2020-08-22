import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { COLOR } from "../../../constants/color";

export const BUTTON_SIZE = {
  LARGE: { H: "60px", W: "400px" },
  MEDIUM: { H: "60px", W: "380px" },
  BASE: { H: "50px", W: "180px" },
  SMALL: { H: "40px", W: "150px" },
};

type ButtonSize = keyof typeof BUTTON_SIZE;
type Color = keyof typeof COLOR;

export type Props = {
  to: string;
  bgcolor?: Color;
  clickHandler?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  size?: ButtonSize;
};

export const StyledLink = styled(Link)<Omit<Props, "to">>`
  background-color: ${({ bgcolor = "DARK_GREEN" }) => COLOR[bgcolor]};
  border-radius: 50px 0 0 50px;
  color: ${({ bgcolor = "DARK_GREEN" }) =>
    bgcolor === "DARK_GREEN" ? COLOR["WHITE"] : COLOR["DARK_GREEN"]};
  display: inline-block;
  fill: ${({ bgcolor = "DARK_GREEN" }) =>
    bgcolor === "DARK_GREEN" ? COLOR["WHITE"] : COLOR["DARK_GREEN"]};
  height: ${({ size = "BASE" }) => BUTTON_SIZE[size].H};
  line-height: ${({ size = "BASE" }) => BUTTON_SIZE[size].H};
  padding-left: 20px;
  text-decoration: none;
  width: ${({ size = "BASE" }) => BUTTON_SIZE[size].W};

  :hover {
    background-color: ${COLOR["LIGHT_GREEN"]};
    color: ${COLOR["WHITE"]};
    fill: ${COLOR["WHITE"]};
  }
`;

const DefaultLink: FC<Props> = (props) => {
  return (
    <StyledLink
      bgcolor={props.bgcolor}
      size={props.size}
      onClick={props.clickHandler}
      to={props.to}
    >
      {props.children}
    </StyledLink>
  );
};

export default DefaultLink;
