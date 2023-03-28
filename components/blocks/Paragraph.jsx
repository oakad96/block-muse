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

export const Paragraph = ({ id, content, isDragging }) => {
  const { updateBlockContent } = useContext(BlocksContext);

  const handleKeyDown = (e) => {
    updateBlockContent(id, e.target.value);
  };

  return (
    <>
      <Flex minW="full" alignItems={"center"}>
        <Editable
          minW="full"
          id={id}
          onKeyDown={handleKeyDown}
          defaultValue={content}
          fontSize="md"
          as="p"
        >
          <EditablePreview />
          <EditableInput
            isReadOnly={!!isDragging}
            sx={{
              "&:focus": {
                outline: "none",
                border: "none",
                boxShadow: "none",
              },
            }}
          />
        </Editable>
        <Box>
          <DeleteButton id={id} />
        </Box>
      </Flex>
    </>
  );
};
