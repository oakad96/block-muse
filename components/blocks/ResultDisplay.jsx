import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function ResultDisplay({ block }) {
  return (
    <Box as="div">
      <Text as="p">
        ={" "}
        {typeof block.result !== "undefined"
          ? block.result
          : "Not a valid expression"}
      </Text>
    </Box>
  );
}
