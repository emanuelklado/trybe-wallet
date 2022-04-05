import { requestAPI, requestExpensesAPI } from '../services/api';

export const CREATE_EXPENSES_SUCCESS = 'CREATE_EXPENSES_SUCCESS';
export const CREATE_EXPENSES_FAIL = 'CREATE_EXPENSES_FAIL';
export const CREATE_EXPENSES = 'CREATE_EXPENSES';
export const LOGIN = 'LOGIN';
export const REQUEST_ACRONYMS = 'REQUEST_ACRONYMS';
export const REQUEST_ACRONYMS_SUCCESS = 'REQUEST_ACRONYMS_SUCCESS';
export const REQUEST_ACRONYMS_FAIL = 'REQUEST_ACRONYMS_FAIL';

// action do login/user
export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

//  actions das siglas
export const requestAcronyms = () => ({
  type: REQUEST_ACRONYMS,
});

export const requestAcronymsSuccess = (acronyms) => ({
  type: REQUEST_ACRONYMS_SUCCESS,
  payload: acronyms,
});

export const requestAcronymsFail = (error) => ({
  type: REQUEST_ACRONYMS_FAIL,
  payload: error,
});

// actions das despesas
export const actionCreateExpense = () => ({
  type: CREATE_EXPENSES,
});

export const actionCreateExpenseSuccess = (exchangeRates, tax) => ({
  type: CREATE_EXPENSES_SUCCESS,
  payload: { exchangeRates, tax },
});

export const actionCreateExpenseFail = (error) => ({
  type: CREATE_EXPENSES_FAIL,
  payload: error,
});

// THUNKS
export const thunkGetAcronyms = () => async (dispatch) => {
  dispatch(requestAcronyms());
  console.log('chamei thunk siglas');
  try {
    const acronyms = await requestAPI();
    dispatch(requestAcronymsSuccess(acronyms));
  } catch (error) {
    dispatch(requestAcronymsFail(error));
  }
};

export const thunkGetValueInputForm = (tax) => async (dispatch) => {
  dispatch(actionCreateExpense());
  console.log('chamei thunk value input');
  try {
    const expenses = await requestExpensesAPI();
    dispatch(actionCreateExpenseSuccess(expenses, tax));
  } catch (error) {
    dispatch(actionCreateExpenseFail(error));
  }
};
