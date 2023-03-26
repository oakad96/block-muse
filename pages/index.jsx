import { Sheet, AddButton, DataSourceLoader, BlocksList } from "../components";
import { Center } from "@chakra-ui/react";
import mockBlocks from "../datasets/mockBlocks";

console.log(mockBlocks);

export default function Home() {
  return (
    <Sheet title="Document">
      <DataSourceLoader getDataFunc={() => mockBlocks} resourceName="blocks">
        <BlocksList />
        <Center>
          <AddButton />
        </Center>
      </DataSourceLoader>
    </Sheet>
  );
}
