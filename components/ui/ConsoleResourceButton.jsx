import React from "react";
import { Button } from "@chakra-ui/react";

export function ConsoleResourceButton({ resource }) {
  return (
    <Button
      mt={50}
      colorScheme="red"
      size="xs"
      onClick={() => console.log(resource)}
    >
      Console Blocks
    </Button>
  );
}
