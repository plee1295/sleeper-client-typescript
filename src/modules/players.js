"use strict";
exports.__esModule = true;
exports.getPlayers = void 0;
var variables_1 = require("../config/variables");
var fetch_1 = require("../config/fetch");
function getPlayers(leagueId) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/players/nfl"));
}
exports.getPlayers = getPlayers;
