// components/blocks/Formula.js
import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";

export const Formula = ({ id, formula, result }) => {
  return (
    <Box id={id} my={4}>
      <Input
        placeholder="Enter formula"
        value={formula || ""}
        isReadOnly
        mb={2}
        borderColor="gray.400"
      />
      <Text fontSize="md" fontWeight="bold">
        Formula : {formula || "No formula"}
        Result: {result || "No result"}
      </Text>
    </Box>
  );
};
