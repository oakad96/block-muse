import React from "react";
import { Header } from "./Header";
import { Paragraph } from "./Paragraph";
import { Formula } from "./Formula";

export const Block = ({ type, content }) => {
  switch (type) {
    case "H1":
    case "H2":
    case "H3":
      return <Header level={type} content={content} />;
    case "PARAGRAPH":
      return <Paragraph content={content} />;
    case "FORMULA":
      return <Formula result={content} />;
    default:
      return null;
  }
};
