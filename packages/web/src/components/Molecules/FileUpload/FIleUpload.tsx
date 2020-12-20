import {
  Input,
  Flex,
  FormLabel,
  Box,
  InputProps,
  Spacer,
  Avatar,
  Text,
  Button,
  Tag,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";

export type Props = InputProps & {
  title: string;
  namae: string;
  required?: boolean;
};

// TODO: refactoring
export const FileUpload = React.forwardRef<InputProps, Props>(
  ({ required, title, children, namae, ...rest }, ref) => {
    const [file, setFile] = useState<File>();

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };

    const handleCancel = () => {
      setFile(undefined);
    };

    return (
      <Box>
        <Flex alignItems="center" mb={1}>
          <Flex justifyContent="center" direction="row">
            <FormLabel color="#717171">{title}</FormLabel>
          </Flex>

          <Spacer />
        </Flex>

        <Flex alignItems="center">
          <Avatar
            name={namae}
            src={file ? URL.createObjectURL(file) : undefined}
            size="lg"
            mr="10px"
          />
          <FormLabel cursor="pointer" textAlign="center" ml="10px">
            <Tag size="lg" variant="solid" colorScheme="teal">
              画像を選択
            </Tag>
            <Input
              {...rest}
              ref={ref as React.Ref<HTMLInputElement>}
              required={true}
              display="none"
              type="file"
              border="none"
              height="fit-crontent"
              onChange={handleFile}
            />
          </FormLabel>
        </Flex>
      </Box>
    );
  }
);
