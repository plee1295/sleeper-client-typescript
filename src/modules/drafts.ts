import { baseUrl } from '../config/variables';
import fetchData from '../config/fetch';

export async function getDrafts(leagueId: string | undefined) {
  return await fetchData(`${baseUrl}/league/${leagueId}/drafts`);
}

export async function getDraftPicks(draftId: string | undefined) {
  return await fetchData(`${baseUrl}/draft/${draftId}/picks`);
}
