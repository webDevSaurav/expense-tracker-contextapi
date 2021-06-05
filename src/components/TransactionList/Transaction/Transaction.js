import React from "react";
import { TRANSACTIONTYPES } from "../../../App";
const Transaction = ({ transaction, onDeleteTrx }) => {
  const trxSymbol = transaction.type === TRANSACTIONTYPES.income ? "+" : "-";
  return (
    <>
      <li className={transaction.type === "income" ? "plus" : "minus"}>
        {transaction.name}
        <span>
          {trxSymbol} {Math.abs(transaction.value)}
        </span>
        <button
          className="delete-btn"
          onClick={onDeleteTrx.bind(null, transaction.id)}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
