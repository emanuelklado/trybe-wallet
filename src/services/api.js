const requestAPI = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const objJson = await response.json();
  const acronyms = Object.keys(objJson);
  const acronymsFiltred = acronyms.filter((elem) => elem !== 'USDT');
  return acronymsFiltred;
};

export default requestAPI;
