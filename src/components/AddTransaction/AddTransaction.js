import React, { useState } from "react";

const AddTransaction = ({ onAddTransaction }) => {
  const [expenseName, setExpenseName] = useState("");
  const [expense, setExpense] = useState("");

  const addTransactionHandler = (e) => {
    e.preventDefault();
    if (expenseName.trim() === "" || expense === null) {
      alert("enter proper trasaction name and expense");
      return;
    }
    onAddTransaction({ expenseName, expense: parseInt(expense) });
    setExpenseName("");
    setExpense("");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </div>
        <button className="btn" onClick={addTransactionHandler}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
