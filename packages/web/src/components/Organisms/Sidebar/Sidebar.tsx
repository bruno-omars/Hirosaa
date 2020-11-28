import React, { FC, FunctionComponent, ReactNode } from "react";

import IconLink from "../../Atoms/Links/IconLink";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

const StyledSidebar = styled.div`
  background-color: ${COLOR["DARK_GREEN"]};
  border-radius: 0 50px 50px 0;
  padding-top: 50px;
  width: 100%;
`;

const StyledList = styled.div`
  display: grid;
  grid-template-rows: 80px 80px 80px 80px 80px;
  grid-template-columns: 90%;
  justify-content: right;
  width: 100%;
`;

const StyledMe = styled.div`
  margin: 0 auto;
  width: 90%;
  margin-bottom: 20px;
`;

type Item = {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  to?: string;
  text: string;
  icon: FunctionComponent;
};

type Props = {
  items: Item[];
  children?: ReactNode;
};

const Sidebar: FC<Props> = ({ items, children }: Props) => {
  return (
    <StyledSidebar>
      {children}
      <StyledList>
        {items.map((item) => (
          <IconLink to={item.to || "#"} onClick={item.onClick} text={item.text}>
            <item.icon />
          </IconLink>
        ))}
      </StyledList>
    </StyledSidebar>
  );
};

export default Sidebar;
