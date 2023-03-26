// components/blocks/Block.js
import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";

const Block = ({ type, content }) => {
  switch (type) {
    case "H1":
    case "H2":
    case "H3":
      return <Header level={type} content={content} />;
    case "PARAGRAPH":
      return <Paragraph content={content} />;
    default:
      return <div>Unsupported block type</div>;
  }
};

export default Block;
