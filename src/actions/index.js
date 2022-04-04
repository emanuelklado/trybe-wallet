import requestAPI from '../services/api';

export const LOGIN = 'LOGIN';
export const REQUEST_ACRONYMS = 'REQUEST_ACRONYMS';
export const REQUEST_ACRONYMS_SUCCESS = 'REQUEST_ACRONYMS_SUCCESS';
export const REQUEST_ACRONYMS_FAIL = 'REQUEST_ACRONYMS_FAIL';

export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

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

export const thunkGetAcronyms = () => async (dispatch) => {
  dispatch(requestAcronyms());
  console.log('chamei thunk');
  try {
    const acronyms = await requestAPI();
    dispatch(requestAcronymsSuccess(acronyms));
  } catch (error) {
    dispatch(requestAcronymsFail(error));
  }
};
