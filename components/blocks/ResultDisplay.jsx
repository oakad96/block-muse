import { Box, Code } from "@chakra-ui/react";
import parseExpression from "@/utils/parser";

export function ResultDisplay({ block, blocks }) {
  return (
    <Box as="div">
      <Code as="p">= {parseExpression(block.formula, blocks)}</Code>
    </Box>
  );
}
