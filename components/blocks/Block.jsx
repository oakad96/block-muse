import React from "react";
import { Header } from "./Header";
import { Paragraph } from "./Paragraph";
import { Formula } from "./Formula";

export const Block = ({ id, type, content, onChange }) => {
  switch (type) {
    case "H1":
    case "H2":
    case "H3":
      return <Header id={id} level={type} content={content} />;
    case "PARAGRAPH":
      return <Paragraph id={id} onChange={onChange} content={content} />;
    case "FORMULA":
      return <Formula id={id} result={content} />;
    default:
      return null;
  }
};
