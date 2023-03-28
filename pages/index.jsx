import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import BlocksContext from "../context/BlocksContext";
import {
  Sheet,
  DragDropBlocksList,
  Toolbar,
  ConsoleResourceButton,
} from "../components";

function Home() {
  const { blocks } = useContext(BlocksContext);

  return (
    <Flex direction="column">
      <Sheet title="Document">
        <DragDropBlocksList />
        <Toolbar />
        <ConsoleResourceButton resource={blocks} />
      </Sheet>
    </Flex>
  );
}

export default React.memo(Home);
