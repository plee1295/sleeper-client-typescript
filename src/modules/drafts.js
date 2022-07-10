"use strict";
exports.__esModule = true;
exports.getDraftPicks = exports.getDrafts = void 0;
var variables_1 = require("../config/variables");
var fetch_1 = require("../config/fetch");
function getDrafts(leagueId) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/league/").concat(leagueId, "/drafts"));
}
exports.getDrafts = getDrafts;
function getDraftPicks(draftId) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/draft/").concat(draftId, "/picks"));
}
exports.getDraftPicks = getDraftPicks;
