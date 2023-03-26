import React from "react";
import { Box } from "@chakra-ui/react";
import { Block } from "..";

export const BlocksList = ({ blocks }) => {
  return (
    <Box>
      {(blocks || []).map((block) => {
        return (
          <Block key={block.id} type={block.type} content={block.content} />
        );
      })}
    </Box>
  );
};
