import React, { useState } from "react";
import BlocksContext from "../context/BlocksContext";
import mockBlocks from "@/datasets/mockBlocks";
import { ChakraProvider } from "@chakra-ui/react";
import { setIdsToIndex } from "@/utils/helpers";

export default function App({ Component, pageProps }) {
  const [blocks, setBlocks] = useState(mockBlocks);

  const operations = {
    setBlocks,

    addBlock(block) {
      setBlocks((prevBlocks) => {
        const newBlocks = [
          ...prevBlocks,
          {
            ...block,
          },
        ];

        return newBlocks;
      });
    },

    deleteBlock(id) {
      setBlocks((prevBlocks) => {
        const newBlocks = prevBlocks.filter((block) => block.id !== id);
        return setIdsToIndex(newBlocks);
      });
    },

    updateBlockContent(id, updatedContent) {
      setBlocks((prevBlocks) => {
        const newBlocks = prevBlocks.map((block) => {
          if (block.id === id) {
            return {
              ...block,
              content: updatedContent,
            };
          }
          return block;
        });

        return newBlocks;
      });
    },

    resetBlocks() {
      setBlocks([]);
    },
  };

  return (
    <BlocksContext.Provider
      value={{
        blocks,
        ...operations,
      }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </BlocksContext.Provider>
  );
}
