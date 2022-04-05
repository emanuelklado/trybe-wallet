import { REQUEST_ACRONYMS_SUCCESS,
  REQUEST_ACRONYMS,
  CREATE_EXPENSES_SUCCESS,
  CREATE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
  case REQUEST_ACRONYMS:
    return { ...state };
  case REQUEST_ACRONYMS_SUCCESS:
    console.log(payload);
    return { ...state, currencies: payload };
  case CREATE_EXPENSES:
    return { ...state };
  case CREATE_EXPENSES_SUCCESS:
    payload.tax.exchangeRates = payload.exchangeRates;
    payload.tax.id = state.expenses.length;
    return { ...state, expenses: [...state.expenses, payload.tax] };
  default:
    return state;
  }
};

export default wallet;
