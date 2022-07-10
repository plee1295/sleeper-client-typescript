"use strict";
exports.__esModule = true;
exports.getTransactionsByWeek = exports.getRosters = void 0;
var variables_1 = require("../config/variables");
var fetch_1 = require("../config/fetch");
function getRosters(leagueId) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/league/").concat(leagueId, "/rosters"));
}
exports.getRosters = getRosters;
function getTransactionsByWeek(leagueId, week) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/league/").concat(leagueId, "/transactions/").concat(week));
}
exports.getTransactionsByWeek = getTransactionsByWeek;
