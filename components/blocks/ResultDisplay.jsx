import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function ResultDisplay({ block }) {
  return (
    <Box as="div">
      <Text as="p">= {block.result}</Text>
    </Box>
  );
}
