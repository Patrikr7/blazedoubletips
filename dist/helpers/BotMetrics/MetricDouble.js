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
exports.MetricDouble = void 0;
var CreateBot_1 = require("../../bot/CreateBot");
var MountMessageHelpers_1 = require("../Messages/MountMessageHelpers");
var CountsUseCase_1 = require("../../useCases/counts/CountsUseCase");
var ConfigsUseCase_1 = require("../../useCases/configs/ConfigsUseCase");
var data = {
    messageID: null,
    idMessageSent: null,
    standard: null,
    isEqual: false,
    countGale1: 0,
    countGale2: 0,
    gale: 0,
    counterTipSent: 0,
    countGreen: 0,
    countWhite: 0,
    countRed: 0,
    countColorEqual: 0,
    lastColor: "",
    colors: []
};
var MetricDouble = /** @class */ (function () {
    function MetricDouble() {
        this.bot = new CreateBot_1.Bot();
        this.mounteMessageHelper = new MountMessageHelpers_1.MountMessageHelper();
        this.confirmed = this.mounteMessageHelper.ConfirmedEntry();
        this.abort = this.mounteMessageHelper.AbortEntry();
        this.register = this.mounteMessageHelper.Register();
        this.alert = this.mounteMessageHelper.Alert();
        this.info = this.mounteMessageHelper.Info();
        this.cover = this.mounteMessageHelper.Cover();
        this.entryBlack = this.mounteMessageHelper.Entryblack();
        this.entryRed = this.mounteMessageHelper.EntryRed();
        this.green = this.mounteMessageHelper.Green();
        this.greenWithWhite = this.mounteMessageHelper.GreenWithWhite();
        this.red = this.mounteMessageHelper.Red();
        this.date = Intl.DateTimeFormat("pt-br").format(new Date());
        this.createdAt = this.date;
        this.doubleInput = 2.80;
        this.doubleGale1 = 7.60;
        this.doubleGale2 = 17.00;
        this.doubleWhite = 1.80;
        this.bankInput = 1.80;
        this.bankGale1 = 2.80;
        this.bankGale2 = 6.80;
        this.countsUseCase = new CountsUseCase_1.CountsUseCase();
        this.getConfigs = new ConfigsUseCase_1.ConfigsUseCase();
    }
    MetricDouble.prototype.verifySequenceFour = function (_a) {
        var colorName = _a.colorName, number = _a.number;
        return __awaiter(this, void 0, void 0, function () {
            var configs, ColorOfEntry, _b, message, messageID, message, _c, _d, _e, _f, message2, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, messageID, _w, _x, _y, _z, messageID, _0, _1, _2, _3, messageID, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, possibleEntryCancel, redWithWhite, thisGale, _14, _15, _16, _17, _18, _19, thisGale, profit_loss, profit_white, profit_bank, _20, _21, _22, _23, _24, _25;
            var _26, _27, _28, _29, _30;
            return __generator(this, function (_31) {
                switch (_31.label) {
                    case 0: return [4 /*yield*/, this.getConfigs.findByName(process.env.BOT_NAME)];
                    case 1:
                        configs = _31.sent();
                        if (!configs) {
                            console.log("⛔ O nome do BOT no arquivo .env não é o mesmo nome que você cadastrou!");
                            return [2 /*return*/];
                        }
                        data.standard = configs.standard;
                        if (!(colorName === "red")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.entryBlack];
                    case 2:
                        _b = _31.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.entryRed];
                    case 4:
                        _b = _31.sent();
                        _31.label = 5;
                    case 5:
                        ColorOfEntry = _b;
                        if (!(data.lastColor === colorName || data.lastColor === "")) return [3 /*break*/, 46];
                        data.colors = [];
                        data.colors.push({ colorName: colorName, number: number });
                        data.lastColor = colorName;
                        data.countColorEqual += 1;
                        data.isEqual = true;
                        if (colorName === "white") {
                            data.countColorEqual = 0;
                            console.log(data.colors);
                            console.log("--------------------------------------------------");
                        }
                        if (!(data.isEqual === true && data.countColorEqual === data.standard - 1 && colorName !== "white")) return [3 /*break*/, 7];
                        message = "<b>\uD83E\uDD41 Analisando Poss\u00EDvel Entrada \uD83E\uDDD0</b>";
                        return [4 /*yield*/, this.bot.sendMessage({ message: message })];
                    case 6:
                        messageID = _31.sent();
                        data.messageID = messageID;
                        console.log("BOT1: \uD83E\uDD41 Analisando Poss\u00EDvel Entrada \uD83E\uDDD0");
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        return [2 /*return*/, data];
                    case 7:
                        if (!(data.isEqual === true && data.countColorEqual === data.standard && colorName !== "white")) return [3 /*break*/, 29];
                        if (!(data.messageID !== null)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.bot.deleteMessageWithID(data.messageID)];
                    case 8:
                        _31.sent();
                        _31.label = 9;
                    case 9:
                        data.messageID = null;
                        _e = (_d = "\u2705 Entrar: ".concat(ColorOfEntry, " ")).concat;
                        return [4 /*yield*/, this.cover];
                    case 10:
                        _f = (_c = _e.apply(_d, [_31.sent(), "\n"])).concat;
                        return [4 /*yield*/, this.info];
                    case 11:
                        message = _f.apply(_c, [_31.sent()]);
                        _m = "\uD83C\uDFB0 ".concat;
                        return [4 /*yield*/, this.confirmed];
                    case 12:
                        _o = (_l = _m.apply("\uD83C\uDFB0 ", [_31.sent(), "\n\u26A0\uFE0F \u00DAltima cor "])).concat;
                        if (!(data.lastColor === "red")) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.entryRed];
                    case 13:
                        _p = _31.sent();
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, this.entryBlack];
                    case 15:
                        _p = _31.sent();
                        _31.label = 16;
                    case 16:
                        _q = (_k = _o.apply(_l, [_p, "\n\n\uD83D\uDCC8 <b>BANCA ACIMA DE R$100,00</b>\n\uD83C\uDFB2 <b>ENTRAR NO "])).concat;
                        if (!(colorName === "black")) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.entryRed];
                    case 17:
                        _r = _31.sent();
                        return [3 /*break*/, 20];
                    case 18: return [4 /*yield*/, this.entryBlack];
                    case 19:
                        _r = _31.sent();
                        _31.label = 20;
                    case 20:
                        _s = (_j = _q.apply(_k, [_r, " -> R$ "]).concat(this.doubleInput.toFixed(2).replace('.', ','), "\n\uD83C\uDFAF Opcional: ")).concat;
                        return [4 /*yield*/, this.cover];
                    case 21:
                        _t = (_h = _s.apply(_j, [_31.sent(), " -> R$ "]).concat(this.doubleWhite.toFixed(2).replace('.', ','), "</b>\n\n*---------------*\n\n\uD83D\uDCC8 <b>BANCA ABAIXO DE R$ 100,00</b>\n\uD83C\uDFB2 <b>ENTRAR NO ")).concat;
                        if (!(colorName === "black")) return [3 /*break*/, 23];
                        return [4 /*yield*/, this.entryRed];
                    case 22:
                        _u = _31.sent();
                        return [3 /*break*/, 25];
                    case 23: return [4 /*yield*/, this.entryBlack];
                    case 24:
                        _u = _31.sent();
                        _31.label = 25;
                    case 25:
                        _v = (_g = _t.apply(_h, [_u, " -> R$ "]).concat(this.bankInput.toFixed(2).replace('.', ','), "\n</b>\n\n2\uFE0F\u20E3 M\u00E1ximo <b>02 Martingale</b>\n\n")).concat;
                        return [4 /*yield*/, this.register];
                    case 26:
                        message2 = _v.apply(_g, [_31.sent()]);
                        data.counterTipSent += 1;
                        return [4 /*yield*/, this.bot.sendMessage({ message: message2 })];
                    case 27:
                        messageID = _31.sent();
                        data.idMessageSent = messageID;
                        _x = (_w = console).log;
                        _z = (_y = "BOT1: TIP ENVIADA: ".concat(ColorOfEntry, " ")).concat;
                        return [4 /*yield*/, this.cover];
                    case 28:
                        _x.apply(_w, [_z.apply(_y, [_31.sent()])]);
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        return [2 /*return*/, data];
                    case 29:
                        if (!(data.isEqual === true && data.lastColor === colorName && colorName !== "white" && data.countColorEqual > data.standard)) return [3 /*break*/, 45];
                        data.gale += 1;
                        if (!(data.gale === 1)) return [3 /*break*/, 32];
                        _1 = (_0 = this.bot).replyMessage;
                        _26 = {};
                        _3 = (_2 = "\uD83D\uDCC8 <b>BANCA ACIMA DE R$100,00</b>\n\uD83C\uDFB2 <b>Vamos Primeira Gale</b> -> R$ ".concat(this.doubleGale1.toFixed(2).replace('.', ','), "\n\n<b>\uD83C\uDFAF Opcional: ")).concat;
                        return [4 /*yield*/, this.cover];
                    case 30: return [4 /*yield*/, _1.apply(_0, [(_26.message = _3.apply(_2, [_31.sent(), " -> R$ "]).concat(this.doubleWhite.toFixed(2).replace('.', ','), "</b>\n\n*---------------*\n\n\uD83D\uDCC8 <b>BANCA ABAIXO DE R$ 100,00</b>\n\uD83C\uDFB2 <b>Vamos Primeira Gale</b> -> R$ ").concat(this.bankGale1.toFixed(2).replace('.', ',')), _26.messageID = data.idMessageSent, _26)])];
                    case 31:
                        messageID = _31.sent();
                        data.messageID = messageID;
                        console.log("BOT1: GALE: Vamos a Primeira Gale");
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        return [2 /*return*/, data];
                    case 32:
                        if (!(data.gale === 2)) return [3 /*break*/, 37];
                        if (!(data.messageID !== null)) return [3 /*break*/, 34];
                        return [4 /*yield*/, this.bot.deleteMessageWithID(data.messageID)];
                    case 33:
                        _31.sent();
                        _31.label = 34;
                    case 34:
                        _5 = (_4 = this.bot).replyMessage;
                        _27 = {};
                        _7 = (_6 = "\uD83D\uDCC8 <b>BANCA ACIMA DE R$100,00</b>\n\uD83C\uDFB2 <b>Vamos Segunda Gale</b> -> R$ ".concat(this.doubleGale2.toFixed(2).replace('.', ','), "\n\n<b>\uD83C\uDFAF Opcional: ")).concat;
                        return [4 /*yield*/, this.cover];
                    case 35: return [4 /*yield*/, _5.apply(_4, [(_27.message = _7.apply(_6, [_31.sent(), " -> R$ "]).concat(this.doubleWhite.toFixed(2).replace('.', ','), "</b>\n\n*---------------*\n\n\uD83D\uDCC8 <b>BANCA ABAIXO DE R$ 100,00</b>\n\uD83C\uDFB2 <b>Vamos Segunda Gale</b> -> R$ ").concat(this.bankGale2.toFixed(2).replace('.', ',')), _27.messageID = data.idMessageSent, _27)])];
                    case 36:
                        messageID = _31.sent();
                        data.messageID = messageID;
                        console.log("BOT1: GALE: Vamos Segunda Gale");
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        return [2 /*return*/, data];
                    case 37:
                        if (!(data.messageID !== null)) return [3 /*break*/, 39];
                        return [4 /*yield*/, this.bot.deleteMessageWithID(data.messageID)];
                    case 38:
                        _31.sent();
                        _31.label = 39;
                    case 39:
                        data.gale = 0;
                        data.colors = [];
                        data.colors.push({ colorName: colorName, number: number });
                        data.countColorEqual = 0;
                        data.countColorEqual += 1;
                        data.countRed += 1;
                        data.lastColor = colorName;
                        return [4 /*yield*/, this.countsUseCase.createCounts({
                                countWhite: 0,
                                countGreen: 0,
                                countRed: 1,
                                countGale1: data.gale === 1 ? 1 : 0,
                                countGale2: data.gale === 2 ? 1 : 0,
                                profit_loss: (this.doubleInput + this.doubleGale1 + this.doubleGale2) * -1,
                                profit_lossWhite: (this.doubleWhite * 3) * -1,
                                profit_bank: (this.bankInput + this.bankGale1 + this.bankGale2) * -1,
                                createdAt: this.createdAt
                            })];
                    case 40:
                        _31.sent();
                        _9 = (_8 = this.bot).replyMessage;
                        _28 = {};
                        _10 = "".concat;
                        return [4 /*yield*/, this.red];
                    case 41: return [4 /*yield*/, _9.apply(_8, [(_28.message = _10.apply("", [_31.sent()]), _28.messageID = data.idMessageSent, _28)])];
                    case 42:
                        _31.sent();
                        return [4 /*yield*/, this.bot.sendMessage({ message: "\uD83D\uDCDD Siga arrisca a gest\u00E3o indicada! \uD83D\uDCC8" })];
                    case 43:
                        _31.sent();
                        _12 = (_11 = console).log;
                        _13 = "BOT1: RED: ".concat;
                        return [4 /*yield*/, this.red];
                    case 44:
                        _12.apply(_11, [_13.apply("BOT1: RED: ", [_31.sent()])]);
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        return [2 /*return*/, data];
                    case 45:
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        return [2 /*return*/, data];
                    case 46:
                        if (!(data.lastColor !== colorName)) return [3 /*break*/, 64];
                        possibleEntryCancel = data.isEqual === true && data.countColorEqual === data.standard - 1;
                        if (!possibleEntryCancel) return [3 /*break*/, 49];
                        if (!(data.messageID !== null)) return [3 /*break*/, 48];
                        return [4 /*yield*/, this.bot.deleteMessageWithID(data.messageID)];
                    case 47:
                        _31.sent();
                        _31.label = 48;
                    case 48:
                        data.messageID = null;
                        //await this.bot.sendMessage({ message: await this.abort })
                        console.log("BOT1: ---> Sequência Quebrada, Mensagem apagada.");
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        data.colors = [];
                        _31.label = 49;
                    case 49:
                        redWithWhite = colorName === "white" && data.countColorEqual >= data.standard;
                        if (!redWithWhite) return [3 /*break*/, 56];
                        if (!(data.messageID !== null)) return [3 /*break*/, 51];
                        return [4 /*yield*/, this.bot.deleteMessageWithID(data.messageID)];
                    case 50:
                        _31.sent();
                        _31.label = 51;
                    case 51:
                        data.messageID = null;
                        thisGale = data.gale === 1 ? "<i>Primeira Gale</i>" : "<i>Segunda Gale</i>";
                        data.colors = [];
                        data.colors.push({ colorName: colorName, number: number });
                        data.lastColor = colorName;
                        data.countColorEqual = 0;
                        data.countColorEqual += 1;
                        data.countWhite += 1;
                        data.isEqual = false;
                        data.countGale1 += data.gale === 1 ? 1 : 0;
                        data.countGale2 += data.gale === 2 ? 1 : 0;
                        return [4 /*yield*/, this.countsUseCase.createCounts({
                                countWhite: 1,
                                countGreen: 0,
                                countRed: 0,
                                countGale1: 0,
                                countGale2: 0,
                                profit_loss: data.gale === 0 ? this.doubleInput * -1 : data.gale === 1 ? (this.doubleInput + this.doubleGale1) * -1 : (this.doubleInput + this.doubleGale1 + this.doubleGale2) * -1,
                                profit_lossWhite: data.gale === 0 ? this.doubleWhite * 14 : data.gale === 1 ? (this.doubleWhite * 14) - this.doubleWhite : (this.doubleWhite * 14) - (this.doubleWhite * 2),
                                profit_bank: data.gale === 0 ? this.bankInput * -1 : data.gale === 1 ? (this.bankInput + this.bankGale1) * -1 : (this.bankInput + this.bankGale1 + this.bankGale2) * -1,
                                createdAt: this.createdAt
                            })];
                    case 52:
                        _31.sent();
                        _15 = (_14 = this.bot).replyMessage;
                        _29 = {};
                        _16 = "".concat;
                        return [4 /*yield*/, this.greenWithWhite];
                    case 53: return [4 /*yield*/, _15.apply(_14, [(_29.message = _16.apply("", [_31.sent()]).concat(data.gale ? "\n".concat(thisGale) : ""), _29.messageID = data.idMessageSent, _29)])];
                    case 54:
                        _31.sent();
                        _18 = (_17 = console).log;
                        _19 = "BOT1: GREEN WHITE: ".concat;
                        return [4 /*yield*/, this.greenWithWhite];
                    case 55:
                        _18.apply(_17, [_19.apply("BOT1: GREEN WHITE: ", [_31.sent(), " "]).concat(data.gale ? "\n\n".concat(thisGale) : "")]);
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        data.gale = 0;
                        return [2 /*return*/, data];
                    case 56:
                        data.countColorEqual += 1;
                        data.isEqual = false;
                        if (!(data.isEqual === false && data.countColorEqual >= data.standard + 1 && data.lastColor !== "white")) return [3 /*break*/, 63];
                        if (!(data.messageID !== null)) return [3 /*break*/, 58];
                        return [4 /*yield*/, this.bot.deleteMessageWithID(data.messageID)];
                    case 57:
                        _31.sent();
                        _31.label = 58;
                    case 58:
                        data.messageID = null;
                        thisGale = data.gale === 1 ? "<i>Primeira Gale</i>" : "<i>Segunda Gale</i>";
                        profit_loss = data.gale === 0 ? this.doubleInput : data.gale === 1 ? this.doubleGale1 - this.doubleInput : this.doubleGale2 - (this.doubleInput + this.doubleGale1);
                        profit_white = data.gale === 0 ? this.doubleWhite * -1 : data.gale === 1 ? (this.doubleWhite * 2) * -1 : (this.doubleWhite * 3) * -1;
                        profit_bank = data.gale === 0 ? this.bankInput : data.gale === 1 ? this.bankGale1 - this.bankInput : this.bankGale2 - (this.bankInput + this.bankGale1);
                        data.isEqual = false;
                        data.colors = [];
                        data.colors.push({ colorName: colorName, number: number });
                        data.lastColor = colorName;
                        data.countGreen += data.gale === 1 || data.gale === 2 ? 0 : 1;
                        data.countColorEqual = 0;
                        data.countColorEqual += 1;
                        data.countGale1 += data.gale === 1 ? 1 : 0;
                        data.countGale2 += data.gale === 2 ? 1 : 0;
                        return [4 /*yield*/, this.countsUseCase.createCounts({
                                countWhite: 0,
                                countGreen: data.gale === 1 || data.gale === 2 ? 0 : 1,
                                countRed: 0,
                                countGale1: data.gale === 1 ? 1 : 0,
                                countGale2: data.gale === 2 ? 1 : 0,
                                profit_loss: profit_loss,
                                profit_lossWhite: profit_white,
                                profit_bank: profit_bank,
                                createdAt: this.createdAt
                            })];
                    case 59:
                        _31.sent();
                        _21 = (_20 = this.bot).replyMessage;
                        _30 = {};
                        _22 = "".concat;
                        return [4 /*yield*/, this.green];
                    case 60: return [4 /*yield*/, _21.apply(_20, [(_30.message = _22.apply("", [_31.sent()]).concat(data.gale ? "\n".concat(thisGale) : ""), _30.messageID = data.idMessageSent, _30)])];
                    case 61:
                        _31.sent();
                        _24 = (_23 = console).log;
                        _25 = "BOT1: GREEN: ".concat;
                        return [4 /*yield*/, this.green];
                    case 62:
                        _24.apply(_23, [_25.apply("BOT1: GREEN: ", [_31.sent(), " "]).concat(data.gale ? "\n".concat(thisGale) : "")]);
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        data.gale = 0;
                        return [2 /*return*/, data];
                    case 63:
                        data.colors = [];
                        data.colors.push({ colorName: colorName, number: number });
                        data.lastColor = colorName;
                        data.countColorEqual = 0;
                        data.countColorEqual += 1;
                        console.log(data.colors);
                        console.log("--------------------------------------------------");
                        return [2 /*return*/, data];
                    case 64: return [2 /*return*/, data];
                }
            });
        });
    };
    return MetricDouble;
}());
exports.MetricDouble = MetricDouble;
