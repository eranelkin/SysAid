const calculate = (input) => {
  let actions = {
    add: "+",
    sub: "-",
    div: "/",
    mlt: "*",
  };

  // Create array for Order of Operation and precedence
  actions.actionsOrder = [
    [[actions.mlt], [actions.div]],
    [[actions.add], [actions.sub]],
  ];
  let result;

  // input = input.replace(/[^0-9%^*\\/()\-+.]/g, ""); // clean up unnecessary characters

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
    // Regular Expression to look for operators between floating numbers or integers
    const regE = new RegExp(
      "(\\d+\\.?\\d*)([\\" +
        actions.actionsOrder[i].join("\\") +
        "])(\\d+\\.?\\d*)"
    );
    regE.lastIndex = 0; // take precautions and reset re starting pos

    // Loop while there is still calculation for level of precedence
    while (regE.test(input)) {
      result = calculateSiblings(
        regE.exec(input)[1],
        regE.exec(input)[2],
        regE.exec(input)[3]
      );
      // if (isNaN(result) || !isFinite(result)) return result; // exit early if not a number
      input = input.replace(regE, result);
    }
  }

  return result;
};

export { calculate };
