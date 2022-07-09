import { baseUrl } from '../config/variables';

export function getRosters(leagueId: number) {
  return fetch(`${baseUrl}/league/${leagueId}/rosters`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getTransactionsByWeek(leagueId: number, week: number) {
  return fetch(`${baseUrl}/league/${leagueId}/transactions/${week}`)
    .then((res) => res.json())
    .then((data) => data);
}
