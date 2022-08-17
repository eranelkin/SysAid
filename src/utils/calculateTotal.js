const ERRORS = {
  OPERATOR_START: {
    text: "Cannot start with operator",
    type: "OPERATOR_START",
  },
  OPERATOR_END: {
    text: "Cannot end with operator",
    type: "OPERATOR_END",
  },
  ZERO_DEVIDE: {
    text: "Cannot devide by zero",
    type: "ZERO_DEVIDE",
  },
};
const calculate = (input) => {
  let actions = {
    add: "+",
    sub: "-",
    div: "/",
    mlt: "*",
  };

  actions.actionsOrder = [
    [[actions.mlt], [actions.div]],
    [[actions.add], [actions.sub]],
  ];
  let result;

  const calculateSiblings = (a, op, b) => {
    a = a * 1;
    b = b * 1;
    switch (op) {
      case actions.add:
        return a + b;
      case actions.sub:
        return a - b;
      case actions.div:
        return a / b;
      case actions.mlt:
        return a * b;
      default:
        return;
    }
  };
  for (let i = 0, n = actions.actionsOrder.length; i < n; i++) {
    const startWithOperator = /^[*/\\+-]/;
    const endWithOperator = /[*/\\+-]$/;
    const zeroDevide = /\/0$/;

    if (startWithOperator.test(input)) return ERRORS.OPERATOR_START;
    if (endWithOperator.test(input)) return ERRORS.OPERATOR_END;
    if (zeroDevide.test(input)) return ERRORS.ZERO_DEVIDE;
    if (new Set(input).has("0") && new Set(input).size === 1) return 0;

    const regE = new RegExp(
      "(\\d+\\.?\\d*)([\\" +
        actions.actionsOrder[i].join("\\") +
        "])(\\d+\\.?\\d*)"
    );
    regE.lastIndex = 0;

    while (regE.test(input)) {
      result = calculateSiblings(
        regE.exec(input)[1],
        regE.exec(input)[2],
        regE.exec(input)[3]
      );
      input = input.replace(regE, result);
    }
  }

  return result;
};

export { calculate };
