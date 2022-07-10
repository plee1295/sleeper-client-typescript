"use strict";
exports.__esModule = true;
exports.getThumbnailAvatar = exports.getFullsizeAvatar = exports.getUsers = void 0;
var variables_1 = require("../config/variables");
var fetch_1 = require("../config/fetch");
function getUsers(leagueId) {
    return (0, fetch_1["default"])("".concat(variables_1.baseUrl, "/league/").concat(leagueId, "/users"));
}
exports.getUsers = getUsers;
function getFullsizeAvatar(avatarId) {
    return (0, fetch_1["default"])("https://sleepercdn.com/avatars/".concat(avatarId));
}
exports.getFullsizeAvatar = getFullsizeAvatar;
function getThumbnailAvatar(avatarId) {
    return (0, fetch_1["default"])("https://sleepercdn.com/avatars/thumbs/".concat(avatarId));
}
exports.getThumbnailAvatar = getThumbnailAvatar;
