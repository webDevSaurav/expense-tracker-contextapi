import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { TRANSACTIONTYPES } from "../../../context/GlobalState";
const Transaction = ({ transaction }) => {
  const trxSymbol = transaction.type === TRANSACTIONTYPES.income ? "+" : "-";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <li className={transaction.type === "income" ? "plus" : "minus"}>
        {transaction.name}
        <span>
          {trxSymbol} {Math.abs(transaction.value)}
        </span>
        <button
          className="delete-btn"
          onClick={deleteTransaction.bind(null, transaction.id)}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
