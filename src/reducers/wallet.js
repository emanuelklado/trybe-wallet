// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ACTION': // NÃO ESQUECER DE ALTERAR ACTION
    return state;
  default:
    return state;
  }
};

export default wallet;
