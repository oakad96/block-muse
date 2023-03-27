import { ChakraProvider } from "@chakra-ui/react";
import BlocksContext from "../context/BlocksContext";
import React, { useState } from "react";
import mockBlocks from "@/datasets/mockBlocks";
import { setIdsToIndex } from "@/utils/helpers";

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

  const deleteBlock = (id) => {
    setBlocks((prevBlocks) => {
      const newBlocks = prevBlocks.filter((block) => block.id !== id);
      return setIdsToIndex(newBlocks);
    });
  };

  const updateBlockContent = (id, updatedContent) => {
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
  };

  const resetBlocks = () => {
    setBlocks([]);
  };

  return (
    <ChakraProvider>
      <BlocksContext.Provider
        value={{
          blocks,
          addBlock,
          resetBlocks,
          updateBlockContent,
          deleteBlock,
        }}
      >
        <Component {...pageProps} />
      </BlocksContext.Provider>
    </ChakraProvider>
  );
}
