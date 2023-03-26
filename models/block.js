// models/block.js
const blockTypes = {
  HEADER: "HEADER",
  PARAGRAPH: "PARAGRAPH",
  FORMULA: "FORMULA",
};

class Block {
  constructor(id, type, content) {
    this.id = id;
    this.type = type;
    this.content = content;
  }
}

class HeaderBlock extends Block {
  constructor(id, content, level) {
    super(id, blockTypes.HEADER, content);
    this.level = level;
  }
}

class ParagraphBlock extends Block {
  constructor(id, content) {
    super(id, blockTypes.PARAGRAPH, content);
  }
}

class FormulaBlock extends Block {
  constructor(id, content, formula) {
    super(id, blockTypes.FORMULA, content);
    this.formula = formula;
  }
}

export { blockTypes, HeaderBlock, ParagraphBlock, FormulaBlock };
