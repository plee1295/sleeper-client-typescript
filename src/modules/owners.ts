import { baseUrl } from '../config/variables';

export function getUsers(leagueId: number) {
  return fetch(`${baseUrl}/league/${leagueId}/users`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getFullsizeAvatar(avatarId: string) {
  return fetch(`https://sleepercdn.com/avatars/${avatarId}`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getThumbnailAvatar(avatarId: string) {
  return fetch(`https://sleepercdn.com/avatars/thumbs/${avatarId}`)
    .then((res) => res.json())
    .then((data) => data);
}
