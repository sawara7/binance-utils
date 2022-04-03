import { BaseApiClass, BaseApiClassOptions } from './baseAPI';
import { GetOpenOrderRequest } from './requestType';
import { OrderBookResponse, ExchangeResponse } from './responseType';
import { ApiConfig } from './type';
export declare class PublicApiClass extends BaseApiClass {
    constructor(config: ApiConfig, options?: BaseApiClassOptions);
    ping(): Promise<{}>;
    checkServerTime(): Promise<number>;
    getExchangeInfo(): Promise<ExchangeResponse>;
    getOrderBook(params: GetOpenOrderRequest): Promise<OrderBookResponse>;
}
