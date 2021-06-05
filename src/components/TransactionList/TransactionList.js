import React from "react";
import Transaction from "./Transaction/Transaction";

const TransactionList = ({ transactions, onDeleteTrx }) => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            onDeleteTrx={onDeleteTrx}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
