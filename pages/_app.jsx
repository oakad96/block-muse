import React, { useState, useEffect } from "react";
import BlocksContext from "../context/BlocksContext";
import mockBlocks from "@/datasets/mockBlocks";
import { ChakraProvider, CircularProgress, Center } from "@chakra-ui/react";
import parseExpression from "@/utils/parser";

export default function App({ Component, pageProps }) {
  const [blocks, setBlocks] = useState(null);

  useEffect(() => {
    setBlocks(mockBlocks);
  }, []);

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
        return prevBlocks.filter((block) => block.id !== id);
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

    updateFormula(id, updatedFormula) {
      setBlocks((prevBlocks) => {
        const newBlocks = prevBlocks.map((block) => {
          if (block.id === id) {
            return {
              ...block,
              formula: updatedFormula,
            };
          }
          return block;
        });

        return newBlocks;
      });
    },

    updateResult(id, updatedResult) {
      setBlocks((prevBlocks) => {
        const newBlocks = prevBlocks.map((block) => {
          if (block.id === id) {
            return {
              ...block,
              result: updatedResult,
            };
          }
          return block;
        });

        return newBlocks;
      });
    },

    refreshResults() {
      setBlocks((prevBlocks) => {
        const newBlocks = prevBlocks.map((block) => {
          if (block.type === "FORMULA") {
            console.log(block);
            return {
              ...block,
              result: parseExpression(block.content),
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

  return blocks ? (
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
  ) : (
    <ChakraProvider>
      <Center axis="both">
        <CircularProgress size="sm" isIndeterminate />
      </Center>
    </ChakraProvider>
  );
}
