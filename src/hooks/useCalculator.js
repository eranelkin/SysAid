import { useState, createContext, useContext, useEffect } from "react";
import { calculate } from "../utils/calculateTotal";
import { translations } from "../translations/translations";

const CalculatorContext = createContext();
const ACTIONS_COUNT = 20;
const action = ["*", "/", "+", "-"];

export const CalculatorProvider = ({ children }) => {
  const [historyActions, setHistoryActions] = useState([]);
  const [sessionActions, setSessionActions] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [totalIndexes, setTotalIndexes] = useState([]);

  const addAction = (value) => {
    let updatedHistoryActions = [...historyActions, value];
    let updatedSessionActions = [...sessionActions, value];

    if (updatedHistoryActions.length > ACTIONS_COUNT)
      updatedHistoryActions.shift();
    if (updatedSessionActions.length > ACTIONS_COUNT)
      updatedSessionActions.shift();

    setHistoryActions(updatedHistoryActions);
    setSessionActions(updatedSessionActions);
  };

  const clearHistory = () => {
    setHistoryActions([]);
    // setHistoryActions((history) => [...history, "AC"]);
    setSessionActions([]);
  };

  const equalsActions = () => {
    const valid = !action.includes(historyActions[historyActions.length - 1]);
    if (valid) {
      const result = calculate(sessionActions.join(""));
      setHistoryActions((history) => [...history, result]);
      setSessionActions([result]);
      setTotalIndexes((totals) => [
        ...totals,
        [...historyActions, result].length - 1,
      ]);
    } else {
      setHistoryActions((history) => [...history, translations.err]);
    }

    setIsValid(valid);
  };

  const clearDisplay = () => {
    setIsValid(true);
    setSessionActions([]);
    // setIsClearDisplay(true);
  };

  return (
    <CalculatorContext.Provider
      value={{
        historyActions,
        sessionActions,
        isValid,
        addAction,
        clearHistory,
        equalsActions,
        clearDisplay,
        totalIndexes,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  return useContext(CalculatorContext);
};
