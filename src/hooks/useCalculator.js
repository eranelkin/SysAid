import { useState, createContext, useContext, useEffect } from "react";
import { calculate } from "../utils/calculateTotal";
import { translations } from "../translations/translations";

const CalculatorContext = createContext();
const action = ["*", "/", "+", "-"];

export const CalculatorProvider = ({ children }) => {
  const [historyActions, setHistoryActions] = useState([]);
  const [sessionActions, setSessionActions] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [lastError, setLastError] = useState(null);
  const [totalIndexes, setTotalIndexes] = useState([]);

  useEffect(() => {
    console.log("XXX: ", historyActions);
  }, [historyActions]);

  const clearHistory = () => {
    setHistoryActions([]);
    setSessionActions([]);
    setTotalIndexes([]);
  };

  const addAction = (value) => {
    function fixMultiLastOperators(actions) {
      if (
        action.includes(value) &&
        actions.length > 0 &&
        action.includes(actions[actions.length - 1])
      ) {
        actions.splice(actions.length - 1, 1, value);
        return [...actions];
      }
      return [...actions, value];
    }
    setHistoryActions((history) => fixMultiLastOperators(history));
    setSessionActions((session) => fixMultiLastOperators(session));
  };

  const equalsActions = () => {
    const result = calculate(
      sessionActions.length > 0 ? sessionActions.join("") : "0"
    );
    const valid = typeof result === "number";

    if (valid) {
      setSessionActions([result]);
      setTotalIndexes((totals) => [...totals, historyActions.length]);
    } else {
      setLastError(result.text);
    }
    setIsValid(valid);

    setHistoryActions((history) => [
      ...history,
      valid ? result : translations.err,
    ]);
  };

  // const equalsActions = () => {
  //   const valid = !action.includes(historyActions[historyActions.length - 1]);
  //   let result;
  //   if (valid) {
  //     result = calculate(sessionActions.join(""));
  //     if (typeof result === 'number') {
  //       setSessionActions([result]);
  //       setTotalIndexes((totals) => [...totals, historyActions.length]);
  //     }
  //   }

  //   setIsValid(valid);
  //   setHistoryActions((history) => [
  //     ...history,
  //     valid ? result : translations.err,
  //   ]);
  // };

  const clearDisplay = () => {
    setIsValid(true);
    setLastError(null);
    setSessionActions([]);
  };

  return (
    <CalculatorContext.Provider
      value={{
        historyActions,
        sessionActions,
        isValid,
        totalIndexes,
        lastError,
        addAction,
        clearHistory,
        equalsActions,
        clearDisplay,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(CalculatorContext);
};
