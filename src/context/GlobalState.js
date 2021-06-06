import React, { createContext, useReducer, useEffect } from "react";
import appReducer from "./appReducer";

//initial state
const initalTransactions = {
  transactions: [],
};

export const TRANSACTIONTYPES = {
  income: "income",
  expense: "expense",
};

export const ACTIONS = {
  setInitial: "SET_INITIAL_STATE",
  setUpdatedTransactions: "SET_UPDATED_STATE",
  delete: "DELETE_TRX",
  add: "ADD_TRX",
};

export const setTransactionsToLocalStorage = (transactions) => {
  const trxText = JSON.stringify(transactions);
  localStorage.setItem("transactions", trxText);
};

//create a global context
export const GlobalContext = createContext(initalTransactions);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initalTransactions);

  //actions
  const deleteTransaction = (id) => {
    dispatch({
      type: ACTIONS.delete,
      payload: id,
    });
  };

  const addTransaction = ({ expenseName, expense }) => {
    console.log(expenseName, expense);
    const newTransaction = {
      id: Date.now(),
      name: expenseName,
      value: expense,
      type: expense > 0 ? TRANSACTIONTYPES.income : TRANSACTIONTYPES.expense,
    };
    dispatch({
      type: ACTIONS.add,
      payload: newTransaction,
    });
  };

  const getInitialTransactionState = () => {
    return JSON.parse(localStorage.getItem("transactions"));
  };

  useEffect(() => {
    dispatch({
      type: ACTIONS.setInitial,
      payload: getInitialTransactionState(),
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
