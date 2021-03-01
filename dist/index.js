"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contract_1 = require("./contract");
exports.Contract = contract_1.Contract;
var provider_1 = require("./provider");
exports.Provider = provider_1.Provider;
exports.setMulticallAddress = provider_1.setMulticallAddress;
exports.default = { Contract: contract_1.Contract, Provider: provider_1.Provider, setMulticallAddress: provider_1.setMulticallAddress };
