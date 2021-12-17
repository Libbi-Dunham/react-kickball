import { client, checkError } from './client';

export async function getPlayers() {
  let request = await client.from('players').select().order('name');

  return checkError(request);
}

export async function getTeamById(id) {
  let request = await client.from('players').select('*, name(*)').match({ id }).single();

  return request;
}
