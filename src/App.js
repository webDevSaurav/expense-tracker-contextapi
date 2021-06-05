import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import TransactionList from "./components/TransactionList/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";

export const TRANSACTIONTYPES = {
  income: "income",
  expense: "expense",
};

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const addTransaction = ({ expenseName, expense }) => {
    const transaction = {
      id: Date.now(),
      name: expenseName,
      value: expense,
      type: expense < 0 ? TRANSACTIONTYPES.expense : TRANSACTIONTYPES.income,
    };

    setTransactions((transactions) => {
      return [transaction, ...transactions];
    });
  };

  const deleteTransaction = (id) => {
    setTransactions((transactions) =>
      transactions.filter((trx) => trx.id !== id)
    );
    // setTransactions((trxs) => );
  };

  const calculateBalance = useCallback(() => {
    let income = 0;
    let expense = 0;

    transactions.map((trx) =>
      trx.type === TRANSACTIONTYPES.income
        ? (income += trx.value)
        : (expense += trx.value)
    );
    setIncome(income);
    setExpense(expense);
    setBalance(income + expense);
  }, [transactions]);

  useEffect(() => {
    calculateBalance();
  }, [transactions.length, calculateBalance]);

  return (
    <>
      <Header />
      <div className="container">
        <Balance balanceObj={{ income, expense, balance }} />
        <TransactionList
          transactions={transactions}
          onDeleteTrx={deleteTransaction}
        />
        <AddTransaction onAddTransaction={addTransaction} />
      </div>
    </>
  );
};

export default App;
