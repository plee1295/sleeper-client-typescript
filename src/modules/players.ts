import { baseUrl } from '../config/variables';
import fetchData from '../config/fetch';

export async function getPlayers() {
  return await fetchData(`${baseUrl}/players/nfl`);
}
