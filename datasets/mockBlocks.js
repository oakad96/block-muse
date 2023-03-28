import { generateId } from "@/utils/helpers";

const id = new String();

let mockBlocks = [
  {
    id,
    content: "Introduction",
    type: "H1",
  },
  {
    id,
    type: "PARAGRAPH",
    content:
      "This is a sample paragraph explaining the purpose of the document.",
  },
  {
    id,
    content: "Section 1",
    type: "H2",
  },
  {
    id,
    type: "PARAGRAPH",
    content:
      "This is the first paragraph of Section 1, providing some context about the topic.",
  },
  {
    id,
    type: "PARAGRAPH",
    content:
      "This is the second paragraph of Section 1, containing more detailed information.",
  },
  {
    id,
    content: "Section 2",
    type: "H2",
  },
  {
    id,
    type: "PARAGRAPH",
    content:
      "This is the first paragraph of Section 2, introducing a new topic.",
  },
  {
    id,
    type: "PARAGRAPH",
    content:
      "This is the second paragraph of Section 2, offering a deeper analysis.",
  },
];

mockBlocks = mockBlocks.map((block) => {
  return {
    ...block,
    id: generateId(),
  };
});

export default mockBlocks;
