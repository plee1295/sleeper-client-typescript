import { baseUrl } from '../config/variables';
import fetchData from '../config/fetch';

export async function getRosters(leagueId: string | undefined) {
  return await fetchData(`${baseUrl}/league/${leagueId}/rosters`);
}

export async function getTransactionsByWeek(leagueId: string | undefined, week: number) {
  return await fetchData(`${baseUrl}/league/${leagueId}/transactions/${week}`);
}
