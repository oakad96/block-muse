import React from "react";
import { IconButton } from "@chakra-ui/react";
import BlocksContext from "../../context/BlocksContext";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { DeleteIcon } from "@chakra-ui/icons";

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
