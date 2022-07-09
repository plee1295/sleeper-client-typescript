import { baseUrl } from '../config/variables';

export function getPlayers(leagueId: number) {
  return fetch(`${baseUrl}/players/nfl`)
    .then((res) => res.json())
    .then((data) => data);
}
