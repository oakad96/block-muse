import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function ResultDisplay({ isEditing, block = {} }) {
  return (
    <Box as="div">
      <Text as="p">
        {!isEditing &&
          `= ${block.result !== "undefined" ? block.result : "No result"}`}
      </Text>
    </Box>
  );
}
