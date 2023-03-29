import React, { useContext } from "react";
import { Button, ButtonGroup, Center, Box } from "@chakra-ui/react";
import BlocksContext from "@/context/BlocksContext";
import { ParagraphBlock, HeaderBlock, FormulaBlock } from "../../models/block";
import { generateId } from "@/utils/helpers";
import { AddIcon } from "@chakra-ui/icons";

export function Toolbar() {
  const { addBlock, resetBlocks } = useContext(BlocksContext);

  const handleAddBlock = (e) => {
    const type = e.target.value;
    const id = generateId();
    switch (type) {
      case "H1":
        return addBlock(new HeaderBlock(id, "H1", "H1"));
      case "H2":
        return addBlock(new HeaderBlock(id, "H2", "H2"));
      case "H3":
        return addBlock(new HeaderBlock(id, "H3", "H3"));
      case "FORMULA":
        return addBlock(new FormulaBlock(id, "= 1+1"));
      case "PARAGRAPH":
        return addBlock(new ParagraphBlock(id, "Paragraph"));
      default:
        return null;
    }
  };

  const handleResetBlocks = () => {
    resetBlocks();
  };

  return (
    <Box mt={4} pt={4}>
      <Center>
        <ButtonGroup size="sm" colorScheme="green">
          <ButtonGroup size="sm" isAttached colorScheme="green">
            <Button leftIcon={<AddIcon />} value="H1" onClick={handleAddBlock}>
              H1
            </Button>
            <Button leftIcon={<AddIcon />} value="H2" onClick={handleAddBlock}>
              H2
            </Button>
            <Button leftIcon={<AddIcon />} value="H3" onClick={handleAddBlock}>
              H3
            </Button>
          </ButtonGroup>
          <Button
            leftIcon={<AddIcon />}
            value="PARAGRAPH"
            onClick={handleAddBlock}
          >
            P
          </Button>
          <Button
            leftIcon={<AddIcon />}
            value="FORMULA"
            onClick={handleAddBlock}
          >
            F
          </Button>
        </ButtonGroup>
      </Center>
      <Button
        onClick={handleResetBlocks}
        size="xs"
        variant="outline"
        colorScheme="red"
        p="3"
      >
        Clear All
      </Button>
    </Box>
  );
}
