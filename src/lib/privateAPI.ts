import * as crypto from 'crypto';
import { BaseApiClass, BaseApiClassOptions } from './baseAPI';
import { BinanceApiConfig } from './type';
import { CoinInformation, OrderACKResponse, OrderFULLResponse, OrderRESULTResponse, Response, SpotAccountSnapshotResponse } from './responseType';
import { GetAccountSnapshotRequest, GetAllCoinsInformationRequest, SendNewOrderRequest } from './requestType';
// 
// const BASE_URL = 'https://testnet.binance.vision';
const BASE_URL = 'https://api.binance.com';

export class PrivateApiClass extends BaseApiClass {
    private static toSha256(key: string, value: string): string {
        return crypto
            .createHmac('sha256', key)
            .update(Buffer.from(value))
            .digest('hex')
            .toString();
    }

    private readonly apiKey: string;
    private readonly apiSecret: string;

    constructor(config: BinanceApiConfig, options?: BaseApiClassOptions) {
        config.endPoint = config.endPoint || BASE_URL;
        super(config, options);
        this.apiKey = config.apiKey;
        this.apiSecret = config.apiSecret;
    }

    public getAllCoinsInformation(params: GetAllCoinsInformationRequest): Promise<CoinInformation[]> {
        const path = '/sapi/v1/capital/config/getall';
        return this.get(path, params);
    }

    public getAccountSnapshot(params: GetAccountSnapshotRequest): Promise<SpotAccountSnapshotResponse> {
        const path = '/sapi/v1/accountSnapshot';
        return this.get(path, params);
    }

    public sendTestNewOrder(params: SendNewOrderRequest): Promise<{}> {
        const path = '/api/v3/order/test';
        return this.post(path, params);
    }

    public sendNewOrderACK(params: SendNewOrderRequest): Promise<OrderACKResponse> {
        const path = '/api/v3/order';
        return this.post(path, params);
    }

    public sendNewOrderRESULT(params: SendNewOrderRequest): Promise<OrderRESULTResponse> {
        const path = '/api/v3/order';
        return this.post(path, params);
    }

    public sendNewOrderFULL(params: SendNewOrderRequest): Promise<OrderFULLResponse> {
        const path = '/api/v3/order';
        return this.post(path, params);
    }

    get<T>(path: string, query?: {}) {
        return super.get(path+'?'+this.makeSignature(query), {}, this.makeHeader());
    }

    post<T>(path: string, body: {}) {
        return super.post(path, this.makeSignature(body), this.makeHeader());
    }

    private makeHeader(): any {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-MBX-APIKEY': this.apiKey
        };
    }

    private makeSignature(query?: {[key: string]: string | number}){
        if (!query || Object.keys(query).length === 0){
            return ''
        }
        let s = "";
        for (const key in query){
            s += (s === ''? '': '&') + key + '=' + query[key].toString();
        }
        return s + "&signature=" + PrivateApiClass.toSha256(this.apiSecret, s);
    }
}