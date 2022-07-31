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
exports.Bot = void 0;
var telegraf_1 = require("telegraf");
var ConfigsController_1 = require("../useCases/configs/ConfigsController");
var ConfigsUseCase_1 = require("../useCases/configs/ConfigsUseCase");
var CountsUseCase_1 = require("../useCases/counts/CountsUseCase");
var Bot = /** @class */ (function () {
    function Bot() {
        this.start = process.env.CHANNEL_TYPE + "\n🤖 Bot On! 🟢";
        this.bots = new telegraf_1.Telegraf(process.env.TOKEN_TELEGRAM);
    }
    Bot.prototype.inital = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    console.log(this.start);
                    this.bots.launch();
                    process.once("SIGINT", function () { return _this.bots.stop("SIGINT"); });
                    process.once("SIGTERM", function () { return _this.bots.stop("SIGTERM"); });
                }
                catch (error) {
                    console.log("Error in connection of API!");
                }
                return [2 /*return*/];
            });
        });
    };
    Bot.prototype.sendMessage = function (_a) {
        var countGreen = _a.countGreen, countRed = _a.countRed, color = _a.color, message = _a.message;
        return __awaiter(this, void 0, void 0, function () {
            var messageId, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.bots.telegram.sendMessage(process.env.CHANNEL_NAME, message, { parse_mode: 'HTML' })];
                    case 1:
                        messageId = _b.sent();
                        return [2 /*return*/, messageId.message_id];
                    case 2:
                        error_1 = _b.sent();
                        console.log("Error send message!");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Bot.prototype.deleteMessageWithID = function (messageID) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.bots.telegram.deleteMessage(process.env.CHANNEL_NAME, messageID)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error in delete message!");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Bot.prototype.replyMessage = function (_a) {
        var message = _a.message, messageID = _a.messageID;
        return __awaiter(this, void 0, void 0, function () {
            var messageId, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.bots.telegram.sendMessage(process.env.CHANNEL_NAME, message, { reply_to_message_id: messageID, parse_mode: "HTML" })];
                    case 1:
                        messageId = _b.sent();
                        return [2 /*return*/, messageId.message_id];
                    case 2:
                        error_3 = _b.sent();
                        console.log("Error reply message!");
                        console.log(error_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Bot.prototype.commandBot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.bots.start(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, ctx.reply("\uD83E\uDD16 Bem vindo ao ".concat(ctx.botInfo.first_name, " \uD83D\uDCE3\n\n/padrao Ver as configura\u00E7\u00F5es do Bot.\n\n/config Cadastrar e alterar as configs do Bot.\n\n/resultado Envia relat\u00F3rio no canal.\n<i>Voc\u00EA pode passar uma data\nExemplo: '24/01/2022', se n\u00E3o vai\nser enviado com a data do dia.</i>\n\n/help Ajuda."), { parse_mode: 'HTML' })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.bots.help(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, ctx.reply("\uD83E\uDD16 Bot Comandos \uD83D\uDCE3\n\n/padrao Ver as configura\u00E7\u00F5es do Bot.\n\n/config Cadastrar e alterar as configs do Bot.\n\n/resultado Envia relat\u00F3rio no canal.\n<i>Voc\u00EA pode passar uma data\nExemplo: '24/01/2022', se n\u00E3o vai\nser enviado com a data do dia.</i>", { parse_mode: 'HTML' })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.bots.command("padrao", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                    var configUseCase, configs, _a, activo, standard;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                configUseCase = new ConfigsUseCase_1.ConfigsUseCase();
                                return [4 /*yield*/, configUseCase.show()];
                            case 1:
                                configs = _b.sent();
                                if (!(configs !== null)) return [3 /*break*/, 4];
                                return [4 /*yield*/, configUseCase.show()];
                            case 2:
                                _a = _b.sent(), activo = _a.activo, standard = _a.standard;
                                return [4 /*yield*/, ctx.reply("\uD83E\uDD16 Bot Configs \u2699\uFE0F\n\n<b>Bot:</b> ".concat(activo ? "Ativado" : "Desativado", "\n<b>Padr\u00E3o:</b> ").concat(Number(standard)), { parse_mode: 'HTML' })];
                            case 3:
                                _b.sent();
                                return [2 /*return*/];
                            case 4: return [4 /*yield*/, ctx.reply("Voc\u00EA precisa configurar seu bot\n\n/config", { parse_mode: 'HTML' })];
                            case 5:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.bots.command("ativar", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                    var message;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                message = "\uD83E\uDD16 Vamos ativar o Bot, fique atento! \uD83D\uDCE2\n\n<b>Blaze Double 7</b>";
                                return [4 /*yield*/, this.sendMessage({ message: message })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, ctx.replyWithHTML("\uD83D\uDCE8 <b>Ativando Bot!</b>")];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.bots.command("desativar", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                    var message;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                message = "\uD83E\uDD16 Desativando o Bot, voltaremos mais tarde! \uD83D\uDCE2\nA qualquer momento o BOT pode ser ativado.\n\n<b>Blaze Double 7</b>";
                                return [4 /*yield*/, this.sendMessage({ message: message })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, ctx.replyWithHTML("\uD83D\uDCE8 <b>Desativando Bot!</b>")];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.bots.command("register", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                    var message;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                message = "💰 <b>APROVEITE!</b> 💰\nA Blaze está dobrando o depósito para aqueles que estão se cadastrando pelo link!\n\nCadastre-se e garanta esse bônus ⬇️⬇️\n✅https://blaze.com/r/4oD5L7✅";
                                return [4 /*yield*/, this.sendMessage({ message: message })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, ctx.replyWithHTML("\uD83D\uDCE8 <b>Link enviado!</b>")];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.bots.command("resultado", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, command, date, countUseCase, data, green, gale1, gale2, white, red, profit, profitWhite, totalWin, cont_total, cont_profit, totalSent, percentageWin, bank, message;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = ctx.message.text.split(" "), command = _a[0], date = _a[1];
                                countUseCase = new CountsUseCase_1.CountsUseCase();
                                return [4 /*yield*/, countUseCase.getCounts(date)];
                            case 1:
                                data = _b.sent();
                                green = data.countGreen;
                                gale1 = data.countGale1;
                                gale2 = data.countGale2;
                                white = data.countWhite;
                                red = data.countRed;
                                profit = data.profit_loss;
                                profitWhite = data.profit_lossWhite;
                                totalWin = green + white + gale1 + gale2;
                                cont_total = (profit + profitWhite).toFixed(2).replace('.', ',');
                                cont_profit = ((profit + profitWhite + 100) - 100).toFixed(2).replace('.', ',');
                                totalSent = totalWin + red;
                                percentageWin = Math.round((red * 100) / totalSent);
                                bank = (data.profit_bank).toFixed(2).replace('.', ',');
                                if (!(data.countGreen === null)) return [3 /*break*/, 3];
                                console.log("Sem registro");
                                return [4 /*yield*/, ctx.reply("\uD83D\uDCCA Resultados at\u00E9 agora! \uD83D\uDCC8\n\n\u26D4<b>Sem registro</b>\n\n\u2705Acertos: <b>0</b>\n\u274CN\u00E3o Bateu: <b>0</b>\n\n\uD83E\uDD47Primeira Entrada: <b>0</b>\n1\uFE0F\u20E3Primeira Gale: <b>0</b>\n2\uFE0F\u20E3Segunda Gale: <b>0</b>\n\u26AAWinn Branco: <b>0</b>\n\n <b>0% de aproveitamento!</b>", { parse_mode: 'HTML' })];
                            case 2:
                                _b.sent();
                                return [2 /*return*/];
                            case 3:
                                message = "\uD83D\uDCCA Resultados at\u00E9 agora! \uD83D\uDCC8\n\n\u2705 Acertos: <b>".concat(totalWin, "</b>\n\u274C N\u00E3o Bateu: <b>").concat(red, "</b>\n\n\uD83E\uDD47 Primeira Entrada: <b>").concat(green, "</b>\n1\uFE0F\u20E3 Primeira Gale: <b>").concat(gale1, "</b>\n2\uFE0F\u20E3 Segunda Gale: <b>").concat(gale2, "</b>\n\u26AA Winn Branco: <b>").concat(white, "</b>\n\n<b>").concat(Math.round(100 - percentageWin), "% de aproveitamento!</b>\n\n*---------------------------------*\n\n\u2696\uFE0F <b>Contabilidade:</b>\n\n<b>BANCA ACIMA DE R$ 100,00</b>\n\uD83D\uDCB5 Banca Inicial: <b>R$ 100,00</b>\n\uD83D\uDCB5 Red/Black: <b>R$ ").concat(profit.toFixed(2).replace('.', ','), "</b>\n\uD83D\uDCB5 White: <b>R$ ").concat(profitWhite.toFixed(2).replace('.', ','), "</b>\n\uD83D\uDC8E Lucro: <b>R$ ").concat(cont_profit, "</b>\n\n#########################\n\n<b>BANCA ABAIXO DE R$ 100,00</b>\n\uD83D\uDCB5 Banca Inicial: <b>R$ 100,00</b>\n\uD83D\uDCB5 Red/Black: <b>R$ ").concat(bank, "</b>\n\uD83D\uDC8E Lucro: <b>R$ ").concat(bank, "</b>\n\n*---------------------------------*\n\n\uD83D\uDCB0 Cadastre-se e ganhe um b\u00F4nus no seu primeiro dep\u00F3sito! \u2B07\uFE0F\n\u2705 https://bit.ly/3OT8XIG \u2705");
                                return [4 /*yield*/, this.sendMessage({ message: message })];
                            case 4:
                                _b.sent();
                                return [4 /*yield*/, ctx.replyWithHTML("\uD83D\uDCE8 <b>Relat\u00F3rio enviado!</b>")];
                            case 5:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.bots.command("config", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                    var configUseCase, configs, configsController, respone, _a, _, botName, password, newDefault, activo, newActivo, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                configUseCase = new ConfigsUseCase_1.ConfigsUseCase();
                                return [4 /*yield*/, configUseCase.show()];
                            case 1:
                                configs = _c.sent();
                                configsController = new ConfigsController_1.ConfigsController();
                                respone = ctx.message.text.split(" ");
                                _a = ctx.message.text.split(" "), _ = _a[0], botName = _a[1], password = _a[2], newDefault = _a[3], activo = _a[4];
                                newActivo = activo === "ativado" ? true : false;
                                if (!(respone.length !== 5)) return [3 /*break*/, 3];
                                return [4 /*yield*/, ctx.reply("⚠️ <b>Parametros Errados!</b>\n\nEnviar da seguinte maneira:\n\n<b>Comando:</b> /config\n<b>Bot:</b> nome do seu bot\n<b>Senha:</b> senha de acesso\n<b>Padrão:</b> número do seu padrão, ex. 3\n<b>Ativo:</b> ativado ou desativado\n\n<b>Exemplo:</b> /config blaze-bot abc123 4 ativado", { parse_mode: 'HTML' })];
                            case 2:
                                _c.sent();
                                return [2 /*return*/];
                            case 3:
                                _b = activo;
                                switch (_b) {
                                    case "ativado": return [3 /*break*/, 4];
                                    case "desativado": return [3 /*break*/, 4];
                                }
                                return [3 /*break*/, 12];
                            case 4:
                                if (!(configs === null)) return [3 /*break*/, 7];
                                return [4 /*yield*/, configsController.create({ name: botName, standard: Number(newDefault), activo: newActivo, password: password.toString() })];
                            case 5:
                                _c.sent();
                                return [4 /*yield*/, ctx.reply("\u26A0\uFE0F Aten\u00E7\u00E3o \u26A0\uFE0F\n\nCadastro realizado!", { parse_mode: 'HTML' })];
                            case 6:
                                _c.sent();
                                return [2 /*return*/];
                            case 7:
                                if (!(configs.password === password && configs.name === botName)) return [3 /*break*/, 10];
                                return [4 /*yield*/, configsController.create({ name: botName, standard: Number(newDefault), activo: newActivo, password: password.toString() })];
                            case 8:
                                _c.sent();
                                return [4 /*yield*/, ctx.reply("\u26A0\uFE0F Aten\u00E7\u00E3o \u26A0\uFE0F\n\nPar\u00E2metros Alterados\n\n<b>Bot:</b> ".concat(newActivo ? "Ativado" : "Desativado", "\n<b>Padr\u00E3o:</b> ").concat(Number(newDefault)), { parse_mode: 'HTML' })];
                            case 9:
                                _c.sent();
                                return [2 /*return*/];
                            case 10: return [4 /*yield*/, ctx.reply("\u26A0\uFE0F Aten\u00E7\u00E3o \u26A0\uFE0F\n\nNome do Bot ou Senha errada!", { parse_mode: 'HTML' })];
                            case 11:
                                _c.sent();
                                return [3 /*break*/, 14];
                            case 12: return [4 /*yield*/, ctx.reply("⚠️ Atenção ⚠️\n\nInforme se o BOT está \n<b>ativado</b> ou <b>desativado</b>", { parse_mode: 'HTML' })];
                            case 13:
                                _c.sent();
                                return [3 /*break*/, 14];
                            case 14: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return Bot;
}());
exports.Bot = Bot;
