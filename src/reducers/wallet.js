import { REQUEST_ACRONYMS_SUCCESS, REQUEST_ACRONYMS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_ACRONYMS:
    return { ...state };
  case REQUEST_ACRONYMS_SUCCESS:
    console.log(action.payload);
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
