import { Header } from "./Header";
import { Paragraph } from "./Paragraph";
import { Formula } from "./Formula";
import { DragHandle } from "..";
import { Flex } from "@chakra-ui/react";

export const Block = ({ id, type, content, isDragging }) => {
  const renderBlock = () => {
    switch (type) {
      case "H1":
      case "H2":
      case "H3":
        return (
          <Flex minW="full" alignItems="center">
            <DragHandle />
            <Header
              id={id}
              level={type}
              content={content}
              isDragging={isDragging}
            />
          </Flex>
        );
      case "PARAGRAPH":
        return (
          <Flex alignItems="center">
            <DragHandle />
            <Paragraph id={id} content={content} isDragging={isDragging} />
          </Flex>
        );
      case "FORMULA":
        return (
          <Flex justifyContent="center">
            <DragHandle />
            <Formula id={id} result={content} isDragging={isDragging} />;
          </Flex>
        );
      default:
        return null;
    }
  };

  return renderBlock();
};
