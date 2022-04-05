export const requestAPI = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const objJson = await response.json();
  console.log(objJson);
  const acronyms = Object.keys(objJson);
  const acronymsFiltred = acronyms.filter((elem) => elem !== 'USDT');
  console.log(acronymsFiltred);
  return acronymsFiltred;
};

export const requestExpensesAPI = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const objJson = await response.json();
  console.log(objJson);
  return objJson;
};
