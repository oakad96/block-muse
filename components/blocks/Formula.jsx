import { ResultDisplay } from "./ResultDisplay";
import React, { useContext, useState } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
} from "@chakra-ui/react";
import parseExpression from "../../utils/parser";
import BlocksContext from "../../context/BlocksContext";

export const Formula = ({ id, content, block }) => {
  const { blocks } = useContext(BlocksContext);

  const { updateBlockContent, updateFormula, updateResult } =
    useContext(BlocksContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleKeyDown = (e) => {
    updateFormula(id, e.target.value);
    updateBlockContent(id, e.target.value);
  };

  const onCancel = (e) => {
    updateResult(id, parseExpression(e, blocks));
    setIsEditing(false);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  return (
    <Flex minW="full" alignItems="center" mt="3">
      <Editable
        id={id}
        onKeyDown={handleKeyDown}
        onEdit={onEdit}
        defaultValue={content}
        onCancel={onCancel}
        onSubmit={onCancel}
        fontSize="md"
        minW="full"
        maxH="min-content"
        selectAllOnFocus={false}
      >
        <EditablePreview
          w="full"
          sx={{
            bgColor: "gray.300",
          }}
        />
        <EditableInput
          sx={{
            bgColor: "gray.300",
            "&:focus": {
              outline: "none",
              boxSizing: "border-box",
              border: "none",
              boxShadow: "none",
              h: "min-content",
              bgColor: "gray.300",
            },
          }}
        />
        <ResultDisplay isEditing={isEditing} block={block} blocks={blocks} />
      </Editable>
    </Flex>
  );
};
