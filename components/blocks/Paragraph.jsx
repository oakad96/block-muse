import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const Paragraph = ({ content }) => {
  return (
    <Box my={4}>
      <Text fontSize="md">{content}</Text>
    </Box>
  );
};
