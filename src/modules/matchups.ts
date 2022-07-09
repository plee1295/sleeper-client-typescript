import { baseUrl } from '../config/variables';

export function getMatchupsByWeek(leagueId: number, week: number) {
  return fetch(`${baseUrl}/league/${leagueId}/matchups/${week}`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getWinnersBracket(leagueId: number) {
  return fetch(`${baseUrl}/league/${leagueId}/winners_bracket`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getLosersBracket(leagueId: number) {
  return fetch(`${baseUrl}/league/${leagueId}/losers_bracket`)
    .then((res) => res.json())
    .then((data) => data);
}
