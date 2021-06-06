import React, { useContext } from "react";
import { GlobalContext, TRANSACTIONTYPES } from "../../context/GlobalState";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;
  let balance = 0;

  transactions.map((trx) =>
    trx.type === TRANSACTIONTYPES.income
      ? (income += trx.value)
      : (expense += trx.value)
  );

  balance = income + expense;

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">Rs {balance}</h1>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +Rs {income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -Rs {Math.abs(expense)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Balance;
