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
exports.ConfigsController = void 0;
var MetricDouble_1 = require("../../helpers/BotMetrics/MetricDouble");
var ConfigsUseCase_1 = require("./ConfigsUseCase");
var ConfigsController = /** @class */ (function () {
    function ConfigsController() {
    }
    ConfigsController.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, colorName, number, configsUseCase, configs, metricDouble, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, colorName = _a.colorName, number = _a.number;
                        configsUseCase = new ConfigsUseCase_1.ConfigsUseCase();
                        return [4 /*yield*/, configsUseCase.show()];
                    case 1:
                        configs = _b.sent();
                        if (!configs) {
                            console.log("⚙️ Precisa configurar seu bot!");
                            return [2 /*return*/, response.status(501).json({ message: "Need to configure the bot!" })];
                        }
                        if (!configs.activo) return [3 /*break*/, 3];
                        metricDouble = new MetricDouble_1.MetricDouble();
                        return [4 /*yield*/, metricDouble.verifySequenceFour({ colorName: colorName, number: number, standard: configs.standard })];
                    case 2:
                        data = _b.sent();
                        return [2 /*return*/, response.json(data)];
                    case 3:
                        console.log("⛔Bot desativado");
                        return [2 /*return*/, response.status(501).json({ message: "Bot is desactived!" })];
                }
            });
        });
    };
    ConfigsController.prototype.create = function (_a) {
        var name = _a.name, standard = _a.standard, activo = _a.activo, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var configsUseCase, alreadyExistsConfigs, newConfigs, updateConfig;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        configsUseCase = new ConfigsUseCase_1.ConfigsUseCase();
                        return [4 /*yield*/, configsUseCase.show()];
                    case 1:
                        alreadyExistsConfigs = _b.sent();
                        if (!!alreadyExistsConfigs) return [3 /*break*/, 3];
                        return [4 /*yield*/, configsUseCase.create({
                                name: name,
                                standard: standard,
                                activo: activo,
                                password: password
                            })];
                    case 2:
                        newConfigs = _b.sent();
                        return [2 /*return*/, newConfigs];
                    case 3: return [4 /*yield*/, configsUseCase.update({
                            id: alreadyExistsConfigs.id,
                            standard: standard,
                            activo: activo
                        })];
                    case 4:
                        updateConfig = _b.sent();
                        return [2 /*return*/, updateConfig];
                }
            });
        });
    };
    return ConfigsController;
}());
exports.ConfigsController = ConfigsController;
