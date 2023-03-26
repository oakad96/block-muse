const mockBlocks = [
  {
    id: 1,
    content: "Introduction",
    type: "H1",
  },
  {
    id: 2,
    type: "PARAGRAPH",
    content:
      "This is a sample paragraph explaining the purpose of the document.",
  },
  {
    id: 3,
    content: "Section 1",
    type: "H2",
  },
  {
    id: 4,
    type: "PARAGRAPH",
    content:
      "This is the first paragraph of Section 1, providing some context about the topic.",
  },
  {
    id: 5,
    type: "PARAGRAPH",
    content:
      "This is the second paragraph of Section 1, containing more detailed information.",
  },
  {
    id: 6,
    content: "Section 2",
    type: "H2",
  },
  {
    id: 7,
    type: "PARAGRAPH",
    content:
      "This is the first paragraph of Section 2, introducing a new topic.",
  },
  {
    id: 8,
    type: "PARAGRAPH",
    content:
      "This is the second paragraph of Section 2, offering a deeper analysis.",
  },
  {
    id: 9,
    type: "FORMULA",
    content: "=3+5",
    result: "8",
  },
];

export default mockBlocks;
