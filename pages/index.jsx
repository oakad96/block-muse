import { Sheet, BlocksList } from "../components";
import BlocksContext from "@/context/BlocksContext";
import React, { useContext } from "react";
import DragDropBlocks from "@/components/layout/DragDropBlocks";
import { Card, Center, Flex, Spacer } from "@chakra-ui/react";

function Home() {
  const { blocks } = useContext(BlocksContext);

  return (
    <Flex direction="column">
      <Sheet title="Document">
        <BlocksList key={blocks.length} />
      </Sheet>
      <Spacer />
      <Center>
        <Card minW="lg" minH="container.xl" shadow="xl">
          <DragDropBlocks />
        </Card>
      </Center>
    </Flex>
  );
}

export default React.memo(Home);
