import { DragHandleIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

export const DragHandle = (props) => {
  return (
    <IconButton
      variant="ghost"
      size="xs"
      maxW="xs"
      icon={<DragHandleIcon />}
      sx={{
        cursor: "grab",
        position: "relative",
        ":active": {
          cursor: "grabbing",
        },
      }}
      {...props}
    />
  );
};
