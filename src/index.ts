import { getDrafts, getDraftPicks } from './modules/drafts';
import { getNFLState, getLeague } from './modules/leagues';
import { getMatchupsByWeek, getWinnersBracket, getLosersBracket } from './modules/matchups';
import { getUsers } from './modules/owners';
import { getPlayers } from './modules/players';
import { getRosters, getTransactionsByWeek } from './modules/rosters';

interface IOptions {
  leagueId?: string;
  draftId?: string;
}

class Sleeper {
  options: IOptions;

  constructor(options: IOptions) {
    this.options = options;
  }

  async getDrafts(leagueId: string | undefined = this.options.leagueId) {
    return await getDrafts(leagueId);
  }

  async getDraftPicks(draftId: string | undefined = this.options.draftId) {
    return await getDraftPicks(draftId);
  }

  async getNFLState() {
    return await getNFLState();
  }

  async getLeague(leagueId: string | undefined = this.options.leagueId) {
    return await getLeague(leagueId);
  }

  async getMatchupsByWeek(leagueId: string | undefined = this.options.leagueId, week: number) {
    return await getMatchupsByWeek(leagueId, week);
  }

  async getWinnersBracket(leagueId: string | undefined = this.options.leagueId) {
    return await getWinnersBracket(leagueId);
  }

  async getLosersBracket(leagueId: string | undefined = this.options.leagueId) {
    return await getLosersBracket(leagueId);
  }

  async getUsers(leagueId: string | undefined = this.options.leagueId) {
    return await getUsers(leagueId);
  }

  async getPlayers() {
    return await getPlayers();
  }

  async getRosters(leagueId: string | undefined = this.options.leagueId) {
    return await getRosters(leagueId);
  }

  async getTransactionsByWeek(leagueId: string | undefined = this.options.leagueId, week: number) {
    return await getTransactionsByWeek(leagueId, week);
  }
}

export default Sleeper;
