import React from "react";

const Balance = ({ balanceObj }) => {
  const { income, expense, balance } = balanceObj;
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">Rs {balance}</h1>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">
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
