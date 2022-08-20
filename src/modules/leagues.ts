import { baseUrl } from '../config/variables';
import fetchData from '../config/fetch';

export async function getNFLState() {
  return await fetchData(`${baseUrl}/state/nfl`);
}

export async function getLeague(leagueId: string | undefined) {
  return await fetchData(`${baseUrl}/league/${leagueId}`);
}
