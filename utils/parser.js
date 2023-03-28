const parseExpression = (expression, blocks) => {
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const operators = {
    "+": (right, left) => left + right,
    "-": (right, left) => left - right,
    "*": (right, left) => left * right,
    "/": (right, left) => left / right,
  };

  const isBlockReference = (token) => {
    return token.match(/[a-zA-Z]\d+(\.\w+)?/);
  };

  const isNumber = (token) => {
    return token.match(/[-+]?(\d*\.)?\d+(e[-+]?\d+)?/);
  };

  const REGEX = {
    WHITE_SPACE: /\s+/g,
    ARITHMETIC_OPERATORS: /([\+\-\*/\(\)])/,
    LETTER: /[a-zA-Z]/g,
    FLOAT_NUMBER: /\d+/,
  };

  const generateTokens = (expression) => {
    return expression
      .replace(REGEX.WHITE_SPACE, "")
      .split(REGEX.ARITHMETIC_OPERATORS)
      .filter((token) => {
        return token.length > 0;
      })
      .map((token) => {
        if (isBlockReference(token)) {
          return {
            type: "BLOCK_REFERENCE",
            value: token,
            referenceIndex: token.split(".")[0].replace(REGEX.FLOAT_NUMBER, ""),
            property: token.split(".")[1] ? token.split(".")[1] : "self",
          };
        } else if (isNumber(token)) {
          return {
            type: "NUMBER",
            value: parseFloat(token),
          };
        } else {
          return {
            type: "OPERATOR",
            value: token,
          };
        }
      });
  };

  const formatToken = (token) => {
    switch (token.type) {
      case "BLOCK_REFERENCE":
        const block = blocks[token.referenceIndex];

        if (block.type === "PARAGRAPH" || block.type === "HEADER") {
          if (token.property === "self") {
            token.value = block.content.match(REGEX.FLOAT_NUMBER)
              ? parseFloat(block.content)
              : block.content;
          } else if (token.property === "length") {
            token.value = block.content.length;
          } else {
            throw new Error("Invalid property");
          }
        }
        break;

      case "NUMBER":
        token.value = parseFloat(token.value);
        break;

      case "OPERATOR":
        token.value = token.value;
        break;

      default:
        break;
    }
  };

  const fillOperatorStackAndOutputArray = (token) => {
    if (token.type === "NUMBER") {
      output.push(parseFloat(token.value));
    } else if (token.type === "BLOCK_REFERENCE") {
      switch (token.property) {
        case "self":
          output.push(token.value);

          break;
        case "length":
          output.push(parseFloat(token.value));

          break;
        default:
          break;
      }
    } else if (token.type === "OPERATOR") {
      if (token.value === "(") {
        operatorStack.push(token.value);
      } else if (token.value === ")") {
        while (operatorStack[operatorStack.length - 1] !== "(") {
          const operation = operatorStack.pop();
          const right = output.pop();
          const left = output.pop();

          output.push(operators[operation](right, left));
        }

        operatorStack.pop();
      } else {
        while (
          operatorStack.length > 0 &&
          precedence[token.value] <=
            precedence[operatorStack[operatorStack.length - 1]] &&
          operatorStack[operatorStack.length - 1] !== "("
        ) {
          const operation = operatorStack.pop();
          const right = output.pop();
          const left = output.pop();

          output.push(operators[operation](right, left));
        }

        operatorStack.push(token.value);
      }
    }
  };

  const evaluate = (output, operatorStack) => {
    while (operatorStack.length > 0) {
      const operation = operatorStack.pop();
      const right = output.pop();
      const left = output.pop();

      output.push(operators[operation](right, left));
    }

    return output[0];
  };

  const tokens = generateTokens(expression);
  const output = [];
  const operatorStack = [];

  for (let token of tokens) {
    formatToken(token);
    fillOperatorStackAndOutputArray(token);
  }

  return evaluate(output, operatorStack);
};

console.log(parseExpression("( 15 / 2) - (2 * 12)", [{}]));
