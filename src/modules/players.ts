import { baseUrl } from '../config/variables';
import fetchData from '../config/fetch';

export async function getPlayers(leagueId: string) {
  return await fetchData(`${baseUrl}/players/nfl`);
}
