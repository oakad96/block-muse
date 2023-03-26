// components/blocks/Header.js
import React from "react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

export const Header = ({ level, content }) => {
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

  return (
    <Editable
      defaultValue={content}
      fontSize={getFontSize()}
      aas={`h${level?.slice(-1)}`}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};
