import { Header } from "./Header";
import { Paragraph } from "./Paragraph";
import { Formula } from "./Formula";
import { Flex } from "@chakra-ui/react";

export const Block = ({ id, type, content }) => {
  const renderBlock = () => {
    switch (type) {
      case "H1":
      case "H2":
      case "H3":
        return (
          <Flex minW="full" alignItems="center">
            <Header id={id} level={type} content={content} />
          </Flex>
        );
      case "PARAGRAPH":
        return (
          <Flex minW="full" alignItems="center">
            <Paragraph id={id} content={content} />
          </Flex>
        );
      case "FORMULA":
        return (
          <Flex minW="full" justifyContent="center">
            <Formula id={id} result={content} />;
          </Flex>
        );
      default:
        return null;
    }
  };

  return renderBlock();
};
