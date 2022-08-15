"use strict";
exports.__esModule = true;
var drafts_1 = require("./modules/drafts");
var leagues_1 = require("./modules/leagues");
var matchups_1 = require("./modules/matchups");
var owners_1 = require("./modules/owners");
var players_1 = require("./modules/players");
var rosters_1 = require("./modules/rosters");
(0, leagues_1.getLeague)('782334769970221056').then(function (league) {
    console.log(league);
});
exports["default"] = {
    getDrafts: drafts_1.getDrafts,
    getDraftPicks: drafts_1.getDraftPicks,
    getNFLState: leagues_1.getNFLState,
    getLeague: leagues_1.getLeague,
    getMatchupsByWeek: matchups_1.getMatchupsByWeek,
    getWinnersBracket: matchups_1.getWinnersBracket,
    getLosersBracket: matchups_1.getLosersBracket,
    getUsers: owners_1.getUsers,
    getFullsizeAvatar: owners_1.getFullsizeAvatar,
    getThumbnailAvatar: owners_1.getThumbnailAvatar,
    getPlayers: players_1.getPlayers,
    getRosters: rosters_1.getRosters,
    getTransactionsByWeek: rosters_1.getTransactionsByWeek
};
