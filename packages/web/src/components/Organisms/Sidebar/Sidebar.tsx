import React, { FC, FunctionComponent, ReactNode } from "react";
import IconLink from "../../Atoms/Links/IconLink";
import { COLOR } from "../../../constants/color";
import { Box, Grid } from "@chakra-ui/react";

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
    <Box
      bgColor={COLOR["DARK_GREEN"]}
      borderRadius="0 50px 50px 0"
      pt="50px"
      w="100%"
    >
      {children}
      <Grid
        gridTemplateRows="repeat(5, 80px)"
        gridTemplateColumns="90%"
        justifyContent="right"
        w="100%"
      >
        {items.map((item) => (
          <IconLink
            activeOnlyWhenExact
            to={item.to || "#"}
            onClick={item.onClick}
            text={item.text}
          >
            <item.icon />
          </IconLink>
        ))}
      </Grid>
    </Box>
  );
};

export default Sidebar;
