// Get NFL state: https://api.sleeper.app/v1/state/nfl
// Get league: https://api.sleeper.app/v1/league/714317272176476160

import { baseUrl } from '../config/variables';

export function getNFLState() {
  return fetch(`${baseUrl}/state/nfl`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getLeague(leagueId: number) {
  return fetch(`${baseUrl}/league/${leagueId}`)
    .then((res) => res.json())
    .then((data) => data);
}
