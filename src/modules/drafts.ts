import { baseUrl } from '../config/variables';

export function getDrafts(leagueId: number) {
  return fetch(`${baseUrl}/league/${leagueId}/drafts`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getDraftPicks(draftId: number) {
  return fetch(`${baseUrl}/draft/${draftId}/picks`)
    .then((res) => res.json())
    .then((data) => data);
}
