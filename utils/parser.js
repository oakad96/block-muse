const parseExpression = (expression, blocks = {}) => {
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
    ARITHMETIC_OPERATORS: /[\+\-\*/()]/,
    LETTER: /[a-zA-Z]/g,
    FLOAT_NUMBER: /\d+/,
    JUST_NUMBERS: /^[+-]?\d+(?:\.\d+)?$/,
  };

  const parseProperty = (str) => {
    const regex = /^([a-z])(\d+)(?:\.([a-z]+)(?:\((\d+)\))?)?$/i;
    const match = str.match(regex);

    if (match) {
      const referenceIndex = parseInt(match[2], 10);
      const property = match[3] ? match[3] : "self";
      const parameter = parseInt(match[4], 10);

      const obj = {
        referenceIndex,
        property,
        parameter,
      };

      return obj;
    }
  };

  const generateTokens = (expression) => {
    const regex = /([a-zA-Z]\d+(?:\.[a-zA-Z]+(?:\(\d+\))?)?|\d+|[+\-*/()])/g;
    const tokens = expression.match(regex);

    return tokens.map((token) => {
      if (isBlockReference(token)) {
        return {
          type: "BLOCK_REFERENCE",
          value: token,
          ...parseProperty(expression),
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

        if (
          block?.type === "PARAGRAPH" ||
          block?.type === "H1" ||
          block?.type === "H2" ||
          block?.type === "H3"
        ) {
          if (token.property === "self") {
            token.value = block.content.match(REGEX.JUST_NUMBERS)
              ? parseFloat(block.content)
              : block.content;
          } else if (token.property === "length") {
            token.value = block.content.length;
          } else if (token.property === "left") {
            token.value = block.content.slice(0, token.parameter);
          } else if (token.property === "right") {
            token.value = block.content.slice(-token.parameter);
          } else if (token.property === "upper") {
            token.value = block.content.toUpperCase();
          } else if (token.property === "lower") {
            token.value = block.content.toLowerCase();
          } else if (token.property === "proper") {
            token.value =
              block.content.charAt(0).toUpperCase() +
              block.content.slice(1).toLowerCase();
          }
        } else if (block?.type === "FORMULA") {
          if (token.property === "self") {
            token.value = block.result;
          } else if (token.property === "length") {
            token.value = block.result.length;
          } else if (token.property === "left") {
            token.value = block.result.slice(0, token.parameter);
          } else if (token.property === "right") {
            token.value = block.result.slice(-token.parameter);
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
        case "left":
        case "right":
        case "upper":
        case "lower":
        case "proper":
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

export default parseExpression;
