"use strict";
exports.__esModule = true;
exports.getLosersBracket = exports.getWinnersBracket = exports.getMatchupsByWeek = void 0;
var variables_1 = require("../config/variables");
var fetch_1 = require("../config/fetch");
function getMatchupsByWeek(leagueId, week) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/league/").concat(leagueId, "/matchups/").concat(week));
}
exports.getMatchupsByWeek = getMatchupsByWeek;
function getWinnersBracket(leagueId) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/league/").concat(leagueId, "/winners_bracket"));
}
exports.getWinnersBracket = getWinnersBracket;
function getLosersBracket(leagueId) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/league/").concat(leagueId, "/losers_bracket"));
}
exports.getLosersBracket = getLosersBracket;
