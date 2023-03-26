import { Sheet, BlocksList } from "../components";
import BlocksContext from "@/context/BlocksContext";
import React, { useContext } from "react";

function Home() {
  const { blocks } = useContext(BlocksContext);

  return (
    <Sheet title="Document">
      <BlocksList key={blocks.length} />
    </Sheet>
  );
}

export default React.memo(Home);
