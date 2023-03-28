import React, { useContext } from "react";
import { Button, ButtonGroup, Center, Box } from "@chakra-ui/react";
import BlocksContext from "@/context/BlocksContext";

export function Toolbar({ handleAddBlock, handleResetBlocks }) {
  const { blocks, addBlock, resetBlock } = useContext(BlocksContext);

  return (
    <Box mt={4} pt={4}>
      <Center>
        <ButtonGroup size="xs">
          <ButtonGroup size="xs" isAttached>
            <Button value="H1" onClick={handleAddBlock}>
              H1
            </Button>
            <Button value="H2" onClick={handleAddBlock}>
              H2
            </Button>
            <Button value="H3" onClick={handleAddBlock}>
              H3
            </Button>
          </ButtonGroup>
          <Button value="PARAGRAPH" onClick={handleAddBlock}>
            P
          </Button>
          <Button value="FORMULA" onClick={handleAddBlock}>
            F
          </Button>
        </ButtonGroup>
      </Center>
      <Button onClick={handleResetBlocks} size="xs">
        Reset
      </Button>
    </Box>
  );
}
