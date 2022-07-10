/* tslint:disable */
const fetch = require('node-fetch');

export default function fetchData(url: string) {
  return fetch(url)
    .then((res: { json: () => any }) => res.json())
    .then((data: any) => data);
}
