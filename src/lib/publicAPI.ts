import { BaseApiClass, BaseApiClassOptions } from './baseAPI';
import { GetOpenOrderRequest } from './requestType';
import { OrderBookResponse, ExchangeResponse } from './responseType';
import { ApiConfig } from './type';

const BASE_URL = 'https://api.binance.com';

export class PublicApiClass extends BaseApiClass {
    constructor(config: ApiConfig, options?: BaseApiClassOptions) {
        config.endPoint = config.endPoint || BASE_URL;
        super(config, options);
    }
    
    public ping(): Promise<{}>{
        const path: string = '/api/v3/ping';
        return this.get(path);
    }

    public checkServerTime(): Promise<number>{
        const path: string = '/api/v3/time';
        return this.get(path);
    }

    public getExchangeInfo(): Promise<ExchangeResponse>{
        const path: string = '/api/v3/exchangeInfo';
        return this.get(path);
    }

    public getOrderBook(params: GetOpenOrderRequest): Promise<OrderBookResponse>{
        const path: string = '/api/v3/depth';
        return this.get(path, params);
    }

    // public getTicker(params: GetTickerRequest): Promise<Response<TickerResponse>> {
        // const path: string = '/'.concat(params.pair, '/ticker');
        // return this.get(path);
    // }
}