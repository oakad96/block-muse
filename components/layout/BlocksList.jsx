import { Toolbar } from "./../ui/Toolbar";
import React, { useContext } from "react";
import { Block } from "..";
import BlocksContext from "@/context/BlocksContext";
import { ParagraphBlock, HeaderBlock, FormulaBlock } from "../../models/block";
import { Button } from "@chakra-ui/react";

export const BlocksList = React.memo(() => {
  const { blocks, addBlock, resetBlocks } = useContext(BlocksContext);

  const handleAddBlock = (e) => {
    const type = e.target.value;
    switch (type) {
      case "H1":
        return addBlock(new HeaderBlock(blocks.length + 1, "H1", "H1"));
      case "H2":
        return addBlock(new HeaderBlock(blocks.length + 1, "H2", "H2"));
      case "H3":
        return addBlock(new HeaderBlock(blocks.length + 1, "H3", "H3"));
      case "FORMULA":
        return addBlock(new FormulaBlock(blocks.length + 1, "=1+1"));
      case "PARAGRAPH":
        return addBlock(new ParagraphBlock(blocks.length + 1, "Paragraph"));
      default:
        return null;
    }
  };

  const handleResetBlocks = () => {
    resetBlocks();
  };

  return (
    <>
      {blocks.map((block) => {
        return (
          <Block
            id={block.id}
            key={block.id}
            type={block.type}
            content={block.content}
            onChange={(e) => {
              console.log(this);
            }}
          />
        );
      })}
      <Toolbar
        handleAddBlock={handleAddBlock}
        handleResetBlocks={handleResetBlocks}
      />
      <Button
        mt={50}
        colorScheme="red"
        size="xs"
        onClick={() => console.log(blocks)}
      >
        Console Blocks
      </Button>
    </>
  );
});
