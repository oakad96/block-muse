import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Sheet,
  DragDropBlocksList,
  Toolbar,
  ConsoleResourceButton,
} from "../components";

function Home({ blocks }) {
  return (
    <Flex direction="column">
      <Sheet title="Document" blocks={blocks}>
        <DragDropBlocksList blocks={blocks} />
        <Toolbar />
        <ConsoleResourceButton resource={blocks} />
      </Sheet>
    </Flex>
  );
}

export default React.memo(Home);
