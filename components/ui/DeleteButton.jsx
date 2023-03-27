import React from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import BlocksContext from "../../context/BlocksContext";
import { useContext } from "react";

export function DeleteButton({ id }) {
  const { deleteBlock } = useContext(BlocksContext);

  const handleDelete = () => {
    deleteBlock(id);
  };

  return (
    <IconButton
      onClick={handleDelete}
      variant="ghost"
      size="xs"
      icon={<DeleteIcon />}
      sx={{
        position: "relative",
        top: "2px",
        right: "-24px",
      }}
    />
  );
}
