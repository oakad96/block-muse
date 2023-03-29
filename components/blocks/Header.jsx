import React, { useContext } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
} from "@chakra-ui/react";
import BlocksContext from "@/context/BlocksContext";

export const Header = ({ id, level, content }) => {
  const { updateBlockContent } = useContext(BlocksContext);

  const getFontSize = () => {
    switch (level) {
      case "H1":
        return "3xl";
      case "H2":
        return "2xl";
      case "H3":
        return "xl";
      default:
        return "lg";
    }
  };

  const handleKeyDown = (e) => {
    updateBlockContent(id, e.target.value);
  };

  const onSubmit = (e) => {
    updateBlockContent(id, e);
  };

  return (
    <Flex minW="full" alignItems="center">
      <Editable
        as={`h${level?.slice(-1)}`}
        fontWeight="bold"
        minW="full"
        fontSize={getFontSize()}
        defaultValue={content}
        id={id}
        onKeyDown={handleKeyDown}
        selectAllOnFocus={false}
        onCancel={onSubmit}
        onSubmit={onSubmit}
      >
        <EditablePreview w="full" />
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
