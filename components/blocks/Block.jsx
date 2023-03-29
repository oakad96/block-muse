import { Formula, Paragraph, Header } from "..";
import { Flex } from "@chakra-ui/react";
import React from "react";

export const Block = ({ id, type, content, formula, block }) => {
  const renderBlock = () => {
    switch (type) {
      case "H1":
      case "H2":
      case "H3":
        return (
          <Flex w="full" alignItems="center">
            <Header id={id} level={type} content={content} />
          </Flex>
        );
      case "PARAGRAPH":
        return (
          <Flex w="full" alignItems="center">
            <Paragraph id={id} content={content} />
          </Flex>
        );
      case "FORMULA":
        return (
          <Flex w="full" justifyContent="center">
            <Formula
              id={id}
              content={content}
              formula={formula}
              block={block}
            />
          </Flex>
        );
      default:
        return null;
    }
  };

  return renderBlock();
};
