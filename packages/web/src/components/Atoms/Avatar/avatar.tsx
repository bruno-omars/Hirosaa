import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";
import { HTMLStandardType } from "../../system-style-type";

export const avatarSize = {
  "2xs": "1.1rem",
  xs: "1.5rem",
  sm: "2rem",
  md: "3rem",
  lg: "4rem",
  xl: "6rem",
  "2xl": "8rem",
};

export type AvatarProps = HTMLStandardType & {
  onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  size?: keyof typeof avatarSize;
  src?: string;
  icon?: React.ReactElement;
};

const StyledSpan = styled.span<AvatarProps>`
  display: inline-block;
  border-radius: ${({ borderRadius = "50%" }) => {
    return typeof borderRadius === "string"
      ? borderRadius
      : `${borderRadius}px`;
  }};

  height: ${({ size = "md" }) => avatarSize[size]};
  width: ${({ size = "md" }) => avatarSize[size]};
  background-color: ${COLOR.LIGHT_GREEN};

  cursor: ${({ onClick }) => onClick && "pointer"};
  cursor: ${({ cursor }) => cursor};
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Avatar: React.FC<AvatarProps> = ({
  src,
  icon,
  ...rest
}: AvatarProps) => {
  if (icon) {
    return <StyledSpan {...rest}>{icon}</StyledSpan>;
  }

  return (
    <StyledSpan {...rest}>
      <StyledImage src={src} />
    </StyledSpan>
  );
};
