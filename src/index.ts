import { getDrafts, getDraftPicks } from './modules/drafts';
import { getNFLState, getLeague } from './modules/leagues';
import { getMatchupsByWeek, getWinnersBracket, getLosersBracket } from './modules/matchups';
import { getUsers } from './modules/owners';
import { getPlayers } from './modules/players';
import { getRosters, getTransactionsByWeek } from './modules/rosters';

interface IOptions {
  leagueId: string;
}

class Sleeper {
  options: IOptions;

  constructor(options: IOptions) {
    this.options = options;
  }

  async getDrafts() {
    return await getDrafts(this.options.leagueId);
  }

  async getDraftPicks(draftId: string) {
    return await getDraftPicks(draftId);
  }

  async getNFLState() {
    return await getNFLState();
  }

  async getLeague() {
    return await getLeague(this.options.leagueId);
  }

  async getMatchupsByWeek(week: number) {
    return await getMatchupsByWeek(this.options.leagueId, week);
  }

  async getWinnersBracket() {
    return await getWinnersBracket(this.options.leagueId);
  }

  async getLosersBracket() {
    return await getLosersBracket(this.options.leagueId);
  }

  async getUsers() {
    return await getUsers(this.options.leagueId);
  }

  async getPlayers() {
    return await getPlayers();
  }

  async getRosters() {
    return await getRosters(this.options.leagueId);
  }

  async getTransactionsByWeek(week: number) {
    return await getTransactionsByWeek(this.options.leagueId, week);
  }
}

const sleeper = new Sleeper({ leagueId: '714317272176476160' });

sleeper.getDrafts().then((drafts) => {
  console.log(drafts);
});

export default Sleeper;
