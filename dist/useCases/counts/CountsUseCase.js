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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountsUseCase = void 0;
var client_1 = require("../../prisma/client");
var CountsUseCase = /** @class */ (function () {
    function CountsUseCase() {
    }
    CountsUseCase.prototype.getCounts = function (consultationDate) {
        return __awaiter(this, void 0, void 0, function () {
            var d, date, counts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = new Date();
                        date = Intl.DateTimeFormat("pt-br").format(d);
                        return [4 /*yield*/, client_1.client.count.aggregate({
                                _sum: {
                                    countGreen: true,
                                    countWhite: true,
                                    countRed: true,
                                    countGale1: true,
                                    countGale2: true,
                                    profit_loss: true,
                                    profit_lossWhite: true,
                                    profit_bank: true
                                },
                                where: {
                                    createdAt: {
                                        contains: consultationDate ? consultationDate : date
                                    }
                                }
                            })];
                    case 1:
                        counts = _a.sent();
                        return [2 /*return*/, counts._sum];
                }
            });
        });
    };
    CountsUseCase.prototype.createCounts = function (_a) {
        var countGreen = _a.countGreen, countWhite = _a.countWhite, countRed = _a.countRed, countGale1 = _a.countGale1, countGale2 = _a.countGale2, profit_loss = _a.profit_loss, profit_lossWhite = _a.profit_lossWhite, profit_bank = _a.profit_bank, createdAt = _a.createdAt;
        return __awaiter(this, void 0, void 0, function () {
            var counts;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, client_1.client.count.create({
                            data: {
                                countGreen: countGreen,
                                countWhite: countWhite,
                                countRed: countRed,
                                countGale1: countGale1,
                                countGale2: countGale2,
                                profit_loss: profit_loss,
                                profit_lossWhite: profit_lossWhite,
                                profit_bank: profit_bank,
                                createdAt: createdAt
                            }
                        })];
                    case 1:
                        counts = _b.sent();
                        return [2 /*return*/, counts];
                }
            });
        });
    };
    CountsUseCase.prototype.updateCounts = function (_a) {
        var uuid = _a.uuid, countGreen = _a.countGreen, countWhite = _a.countWhite, countRed = _a.countRed, countGale1 = _a.countGale1, countGale2 = _a.countGale2, profit_loss = _a.profit_loss, profit_lossWhite = _a.profit_lossWhite, profit_bank = _a.profit_bank;
        return __awaiter(this, void 0, void 0, function () {
            var updateCounts;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, client_1.client.count.update({
                            where: { uuid: uuid },
                            data: {
                                countGreen: countGreen,
                                countWhite: countWhite,
                                countRed: countRed,
                                countGale1: countGale1,
                                countGale2: countGale2,
                                profit_loss: profit_loss,
                                profit_lossWhite: profit_lossWhite,
                                profit_bank: profit_bank
                            }
                        })];
                    case 1:
                        updateCounts = _b.sent();
                        return [2 /*return*/, updateCounts];
                }
            });
        });
    };
    return CountsUseCase;
}());
exports.CountsUseCase = CountsUseCase;
