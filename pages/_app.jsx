import { ChakraProvider } from "@chakra-ui/react";
import BlocksContext from "../context/BlocksContext";
import React, { useState } from "react";
import mockBlocks from "@/datasets/mockBlocks";

export default function App({ Component, pageProps }) {
  const [blocks, setBlocks] = useState(mockBlocks);

  const addBlock = (block) => {
    setBlocks((prevBlocks) => {
      const newBlocks = [
        ...prevBlocks,
        {
          ...block,
        },
      ];

      return newBlocks;
    });
  };

  const updateBlocks = (changedBlock) => {
    setBlocks((prevBlocks) => {
      const newBlocks = prevBlocks.map((block) => {
        if (block.id === changedBlock.id) {
          return changedBlock;
        }
        return block;
      });

      return newBlocks;
    });
  };

  const resetBlocks = () => {
    setBlocks([]);
  };

  return (
    <ChakraProvider>
      <BlocksContext.Provider
        value={{ blocks, addBlock, resetBlocks, updateBlocks }}
      >
        <Component {...pageProps} />
      </BlocksContext.Provider>
    </ChakraProvider>
  );
}
