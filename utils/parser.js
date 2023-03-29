const parseExpression = (expression, blocks = {}) => {
  if (!expression) return null;
  if (typeof expression !== "string") return null;
  if (expression.length === 0) return null;
  if (expression.match(/^\s+$/)) return null;

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
    return token.match(/^([a-z])(\d+)(?:\.([a-z]+)(?:\((\d+)\))?)?$/i);
  };

  const isNumber = (token) => {
    return token.match(/^(?![a-zA-Z]\d)[+-]?\d+(?:\.\d+)?$/);
  };

  const REGEX = {
    WHITE_SPACE: /\s+/g,
    ARITHMETIC_OPERATORS: /[\+\-\*/()]/,
    LETTER: /[a-zA-Z]/g,
    FLOAT_NUMBER: /\d+/,
    JUST_NUMBERS: /^(?![a-zA-Z]\d)[+-]?\d+(?:\.\d+)?$/,
  };

  const parseProperty = (str) => {
    const regex = /^([b])(\d+)(?:\.([a-z]+)(?:\((\d+)\))?)?$/i;
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
    expression = expression.replace(REGEX.WHITE_SPACE, "");
    const pattern = /\b(b\d+(\.\w+(\(\d+\))?)?|\d+|[+\-*/()])|\(|\)/g;
    const validTokens = expression.match(pattern);

    const tokens = validTokens;

    return tokens?.map((token) => {
      if (isBlockReference(token)) {
        return {
          type: "BLOCK_REFERENCE",
          value: token,
          ...parseProperty(token),
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
    switch (token?.type) {
      case "BLOCK_REFERENCE":
        const block = blocks[token.referenceIndex];
        if (!block) {
          return { type: "invalid", value: "Invalid block reference" };
        }
        if (
          block?.type === "PARAGRAPH" ||
          block?.type === "H1" ||
          block?.type === "H2" ||
          block?.type === "H3"
        ) {
          switch (token.property) {
            case "self":
              token.value = block.content.match(REGEX.JUST_NUMBERS)
                ? parseFloat(block.content)
                : block.content;
              break;
            case "length":
              token.value = block.content.length;
              break;
            case "left":
              token.value = block.content.slice(0, token.parameter);
              break;
            case "right":
              token.value = block.content.slice(-token.parameter);
              break;
            case "upper":
              token.value = block.content.toUpperCase();
              break;
            case "lower":
              token.value = block.content.toLowerCase();
              break;
            case "proper":
              token.value =
                block.content.charAt(0).toUpperCase() +
                block.content.slice(1).toLowerCase();
              break;
            default:
              token.value = "Invalid property for block index";
              break;
          }
        } else if (block?.type === "FORMULA") {
          switch (token.property) {
            case "self":
              token.value = block.result;
              break;
            case "length":
              token.value = block.result.length;
              break;
            case "left":
              token.value = block.result.slice(0, token.parameter);
              break;
            case "right":
              token.value = block.result.slice(-token.parameter);
              break;
            default:
              break;
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

    return token;
  };

  const fillOperatorStackAndOutputArray = (token) => {
    if (token.type === "NUMBER") {
      output.push(parseFloat(token.value));
    } else if (token.type === "BLOCK_REFERENCE") {
      switch (token.property) {
        case "length":
          output.push(parseInt(token.value));

          break;
        default:
          output.push(token.value);

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

          if (operators[operation] === undefined) {
            return "Invalid expression";
          }

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
      if (operatorStack[operatorStack.length - 1] === "(") {
        return "Invalid expression";
      } else if (output.length <= operatorStack.length) {
        return "Invalid expression";
      }

      const operation = operatorStack.pop();
      const right = output.pop();
      const left = output.pop();

      if (right && left && typeof right !== typeof left) {
        return "Invalid types in expression";
      }

      output.push(operators[operation](right, left));
    }

    return output[0];
  };

  const tokens = generateTokens(expression);
  const output = [];
  const operatorStack = [];

  for (let token of tokens || []) {
    token = formatToken(token);
    fillOperatorStackAndOutputArray(token);
  }

  return evaluate(output, operatorStack);
};

export default parseExpression;
