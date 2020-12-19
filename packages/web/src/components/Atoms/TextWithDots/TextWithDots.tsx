import { Box, Text, TextProps } from "@chakra-ui/react";
import React from "react";
import "./style.css";

type Props = TextProps & {
  children: React.ReactChild;
};

export const TextWithDots: React.FC<Props> = React.forwardRef<TextProps, Props>(
  ({ children, ...rest }) => {
    return (
      <Text className="with-dots" {...rest}>
        {children}
      </Text>
    );
  }
);
