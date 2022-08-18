import { baseUrl } from '../config/variables';
import fetchData from '../config/fetch';

export async function getUsers(leagueId: string) {
  return await fetchData(`${baseUrl}/league/${leagueId}/users`);
}

// export async function getFullsizeAvatar(avatarId: string) {
//   return await fetchData(`https://sleepercdn.com/avatars/${avatarId}`);
// }

// export async function getThumbnailAvatar(avatarId: string) {
//   return await fetchData(`https://sleepercdn.com/avatars/thumbs/${avatarId}`);
// }
