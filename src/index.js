"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var drafts_1 = require("./modules/drafts");
var leagues_1 = require("./modules/leagues");
var matchups_1 = require("./modules/matchups");
var owners_1 = require("./modules/owners");
var players_1 = require("./modules/players");
var rosters_1 = require("./modules/rosters");
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var league;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, leagues_1.getLeague)('714317272176476160')];
                case 1:
                    league = _a.sent();
                    console.log(league);
                    return [2 /*return*/];
            }
        });
    });
}
test();
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
