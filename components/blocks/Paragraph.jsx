import React, { useContext } from "react";
import {
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

    if (e.key === "Enter") {
      console.log(e.target.form);
    }
  };

  return (
    <Flex minW="full" alignItems={"center"}>
      <Editable
        id={id}
        onKeyDown={handleKeyDown}
        defaultValue={content}
        fontSize="md"
        as="p"
        minW="full"
        maxH="min-content"
        selectAllOnFocus={false}
      >
        <EditablePreview w="full" />
        <EditableInput
          sx={{
            "&:focus": {
              outline: "none",
              boxSizing: "border-box",
              border: "none",
              boxShadow: "none",
              h: "min-content",
            },
          }}
        />
      </Editable>
    </Flex>
  );
};
