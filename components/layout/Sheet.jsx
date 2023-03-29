import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

export const Sheet = ({ children, title }) => {
  return (
    <Container maxW="container.xl">
      <Box
        bg="white"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        boxShadow="xl"
        p={3}
        my={12}
      >
        <Heading as="h4" fontSize="4xl" textAlign="center" pt={3} pb={6}>
          {title}
        </Heading>
        {children}
      </Box>
    </Container>
  );
};
