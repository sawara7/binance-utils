"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicApiClass = void 0;
const baseAPI_1 = require("./baseAPI");
const BASE_URL = 'https://api.binance.com';
class PublicApiClass extends baseAPI_1.BaseApiClass {
    constructor(config, options) {
        config.endPoint = config.endPoint || BASE_URL;
        super(config, options);
    }
    ping() {
        const path = '/api/v3/ping';
        return this.get(path);
    }
    checkServerTime() {
        const path = '/api/v3/time';
        return this.get(path);
    }
    getExchangeInfo() {
        const path = '/api/v3/exchangeInfo';
        return this.get(path);
    }
    getOrderBook(params) {
        const path = '/api/v3/depth';
        return this.get(path, params);
    }
}
exports.PublicApiClass = PublicApiClass;
