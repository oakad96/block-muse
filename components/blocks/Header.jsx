// components/blocks/Header.js
import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Header = ({ level, content }) => {
  const getFontSize = () => {
    switch (level) {
      case "H1":
        return "2xl";
      case "H2":
        return "xl";
      case "H3":
        return "lg";
      default:
        return "md";
    }
  };

  return (
    <Box my={4}>
      <Heading as={`h${level?.slice(-1)}`} fontSize={getFontSize()}>
        {content || ""}
      </Heading>
    </Box>
  );
};
