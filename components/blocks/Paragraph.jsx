import React from "react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

export const Paragraph = ({ content, onChange }) => {
  return (
    <Editable
      onKeyDown={(e) => console.log(e.target.value)}
      defaultValue={content}
      fontSize="md"
      as="p"
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};
