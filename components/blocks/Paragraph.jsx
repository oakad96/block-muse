import { DeleteButton } from "./../ui/DeleteButton";
import React, { useContext } from "react";
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
} from "@chakra-ui/react";
import BlocksContext from "../../context/BlocksContext";

export const Paragraph = ({ id, content }) => {
  const { updateBlockContent } = useContext(BlocksContext);

  const handleKeyDown = (e) => {
    updateBlockContent(id, e.target.value);
  };

  return (
    <Flex minW="full" alignItems={"center"}>
      <Editable
        id={id}
        onKeyDown={handleKeyDown}
        defaultValue={content}
        fontSize="md"
        as="p"
      >
        <EditablePreview />
        <EditableInput
          sx={{
            "&:focus": {
              outline: "none",
              border: "none",
              boxShadow: "none",
            },
          }}
        />
      </Editable>
    </Flex>
  );
};
