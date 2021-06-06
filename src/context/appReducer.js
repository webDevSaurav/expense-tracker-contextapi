import { ACTIONS, setTransactionsToLocalStorage } from "./GlobalState";

const filterTrx = (state, id) => {
  return state.filter((trx) => trx.id !== id);
};
let newState = {};
export default (state, action) => {
  switch (action.type) {
    case ACTIONS.setInitial:
      if (action.payload) {
        return {
          ...state,
          transactions: action.payload.transactions,
        };
      } else {
        return state;
      }
    case ACTIONS.delete:
      newState = {
        ...state,
        transactions: filterTrx(state.transactions, action.payload),
      };
      setTransactionsToLocalStorage(newState);
      return newState;
    case ACTIONS.add:
      newState = {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
      setTransactionsToLocalStorage(newState);
      return newState;
    default:
      return state;
  }
};
