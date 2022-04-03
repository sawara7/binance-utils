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
Object.defineProperty(exports, "__esModule", { value: true });
const publicAPI_1 = require("./publicAPI");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const api = new publicAPI_1.PublicApiClass({
        endPoint: '',
        keepAlive: false,
        timeout: 3000
    });
    console.log(yield api.ping());
    console.log(yield api.checkServerTime());
    console.log(yield api.getOrderBook({ symbol: 'USDCBUSD' }));
    const res = yield api.getExchangeInfo();
    const symbols = res.symbols;
    for (const s of symbols) {
        if (s.symbol === 'LTCBTC') {
            console.log(s);
        }
    }
}))();
