import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import BlocksContext from "@/context/BlocksContext";

export function DeleteButton({ id }) {
  const { deleteBlock } = useContext(BlocksContext);

  const handleDelete = () => {
    deleteBlock(id);
  };

  return (
    <IconButton
      onClick={handleDelete}
      colorScheme="blackAlpha"
      variant="ghost"
      maxW="s"
      size="s"
      icon={<DeleteIcon />}
      sx={{
        position: "relative",
        justifySelf: "flex-end",
        ":hover": {
          color: "red.500",
        },
      }}
    />
  );
}
