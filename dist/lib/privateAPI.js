"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateApiClass = void 0;
const crypto = __importStar(require("crypto"));
const baseAPI_1 = require("./baseAPI");
// 
// const BASE_URL = 'https://testnet.binance.vision';
const BASE_URL = 'https://api.binance.com';
class PrivateApiClass extends baseAPI_1.BaseApiClass {
    constructor(config, options) {
        config.endPoint = config.endPoint || BASE_URL;
        super(config, options);
        this.apiKey = config.apiKey;
        this.apiSecret = config.apiSecret;
    }
    static toSha256(key, value) {
        return crypto
            .createHmac('sha256', key)
            .update(Buffer.from(value))
            .digest('hex')
            .toString();
    }
    getAllCoinsInformation(params) {
        const path = '/sapi/v1/capital/config/getall';
        return this.get(path, params);
    }
    getAccountSnapshot(params) {
        const path = '/sapi/v1/accountSnapshot';
        return this.get(path, params);
    }
    sendTestNewOrder(params) {
        const path = '/api/v3/order/test';
        return this.post(path, params);
    }
    sendNewOrderACK(params) {
        const path = '/api/v3/order';
        return this.post(path, params);
    }
    sendNewOrderRESULT(params) {
        const path = '/api/v3/order';
        return this.post(path, params);
    }
    sendNewOrderFULL(params) {
        const path = '/api/v3/order';
        return this.post(path, params);
    }
    get(path, query) {
        return super.get(path + '?' + this.makeSignature(query), {}, this.makeHeader());
    }
    post(path, body) {
        return super.post(path, this.makeSignature(body), this.makeHeader());
    }
    makeHeader() {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-MBX-APIKEY': this.apiKey
        };
    }
    makeSignature(query) {
        if (!query || Object.keys(query).length === 0) {
            return '';
        }
        let s = "";
        for (const key in query) {
            s += (s === '' ? '' : '&') + key + '=' + query[key].toString();
        }
        return s + "&signature=" + PrivateApiClass.toSha256(this.apiSecret, s);
    }
}
exports.PrivateApiClass = PrivateApiClass;
