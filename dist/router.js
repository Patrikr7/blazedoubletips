"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var ConfigsController_1 = require("./useCases/configs/ConfigsController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var configController = new ConfigsController_1.ConfigsController();
routes.post("/colors", configController.handle);
