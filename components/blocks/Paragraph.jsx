import { DeleteButton } from "./../ui/DeleteButton";
import React, { useContext } from "react";
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import BlocksContext from "../../context/BlocksContext";
import { DeleteIcon } from "@chakra-ui/icons";

export const Paragraph = ({ id, content, onChange }) => {
  const { updateBlockContent, deleteBlock } = useContext(BlocksContext);

  const handleKeyDown = (e) => {
    updateBlockContent(id, e.target.value);
  };

  return (
    <Flex alignItems={"center"}>
      <Editable
        minW="full"
        id={id}
        onKeyDown={handleKeyDown}
        defaultValue={content}
        fontSize="md"
        as="p"
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Box>
        <DeleteButton id={id} />
      </Box>
    </Flex>
  );
};
