import gameMock from '../mock/game';
// FIXME - IMPROOVE

// const BASE_URL = 'https://xxx.eu.ngrok.io'
const BASE_URL = 'http://localhost:3000';
const CUSTOM_HEADERS = new Headers({ 'ngrok-skip-browser-warning': 'skip' });

export const fetchData = async () => {
  const response = await fetch(`${BASE_URL}/board`, {
    method: 'get',
    headers: CUSTOM_HEADERS,
  });
  const data = await response.json();

  return data;
};

// export const fetchData = async () => {
//   const response = await fetch(`${BASE_URL}/mock`, {
//     method: 'get',
//     headers: CUSTOM_HEADERS,
//   });
//   const data = await response.json();

//   return data
// }

// export const fetchData = () => new Promise((resolver) => resolver(gameMock));
