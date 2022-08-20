import { baseUrl } from '../config/variables';
import fetchData from '../config/fetch';

export async function getMatchupsByWeek(leagueId: string | undefined, week: number) {
  return await fetchData(`${baseUrl}/league/${leagueId}/matchups/${week}`);
}

export async function getWinnersBracket(leagueId: string | undefined) {
  return await fetchData(`${baseUrl}/league/${leagueId}/winners_bracket`);
}

export async function getLosersBracket(leagueId: string | undefined) {
  return await fetchData(`${baseUrl}/league/${leagueId}/losers_bracket`);
}
