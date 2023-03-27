// components/blocks/Header.js
import React, { useContext } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import BlocksContext from "@/context/BlocksContext";
import { DeleteButton } from "..";

export const Header = ({ id, level, content }) => {
  const { updateBlockContent } = useContext(BlocksContext);

  const getFontSize = () => {
    switch (level) {
      case "H1":
        return "2xl";
      case "H2":
        return "xl";
      case "H3":
        return "lg";
      default:
        return "md";
    }
  };

  const handleKeyDown = (e) => {
    updateBlockContent(id, e.target.value);
  };

  return (
    <Flex alignItems={"center"}>
      <Editable
        minW={"full"}
        id={id}
        defaultValue={content}
        fontSize={getFontSize()}
        as={`h${level?.slice(-1)}`}
        onKeyDown={handleKeyDown}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <DeleteButton id={id} />
    </Flex>
  );
};
