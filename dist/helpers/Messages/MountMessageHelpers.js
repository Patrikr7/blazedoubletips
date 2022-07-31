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
exports.MountMessageHelper = void 0;
var MountMessageHelper = /** @class */ (function () {
    function MountMessageHelper() {
        this.confirmedEntry = "<b>Entrada Confirmada ⚠️</b>";
        this.abortEntry = "<b>⚠️ ABORTAR ENTRADA ⚠️</b>";
        this.entryRed = "🔴";
        this.entryblack = "⚫";
        this.green = "<b>WINNNN!</b>\n✅ 🤑💰 ✅";
        this.red = "<b>REEED!</b>\n❌❌😯💨";
        this.info = "2️⃣ Máximo <b>02 Martingale</b>";
        this.cover = "⚪";
        this.alert = "<b>⚠️ ATENÇÃO ⚠️</b>";
        this.balance = "📊 Balanço 📊";
        this.greenWithWhite = "<b>WINNNN!!</b>\n✅ 🤑💰 ✅\n\n<i>No Branco</i> ⚪";
        this.register = "💰 Cadastre-se e ganhe um bônus no seu primeiro depósito! ⬇️\n✅ https://bit.ly/3OT8XIG ✅";
    }
    MountMessageHelper.prototype.Register = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.register];
            });
        });
    };
    MountMessageHelper.prototype.ConfirmedEntry = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.confirmedEntry];
            });
        });
    };
    MountMessageHelper.prototype.AbortEntry = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.abortEntry];
            });
        });
    };
    MountMessageHelper.prototype.EntryRed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.entryRed];
            });
        });
    };
    MountMessageHelper.prototype.Entryblack = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.entryblack];
            });
        });
    };
    MountMessageHelper.prototype.Green = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.green];
            });
        });
    };
    MountMessageHelper.prototype.GreenWithWhite = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.greenWithWhite];
            });
        });
    };
    MountMessageHelper.prototype.Red = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.red];
            });
        });
    };
    MountMessageHelper.prototype.Info = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.info];
            });
        });
    };
    MountMessageHelper.prototype.Cover = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cover];
            });
        });
    };
    MountMessageHelper.prototype.Alert = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.alert];
            });
        });
    };
    MountMessageHelper.prototype.Balance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.balance];
            });
        });
    };
    return MountMessageHelper;
}());
exports.MountMessageHelper = MountMessageHelper;
