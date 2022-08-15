/* tslint:disable */
const fetch = require('node-fetch');

import handleError from './error';

export default function fetchData(url: string) {
  return fetch(url)
    .then((res: { json: () => any }) => res.json().then((json: any) => handleError(json)))
    .then((data: any) => data);
}
