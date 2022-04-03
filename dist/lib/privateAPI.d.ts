import { BaseApiClass, BaseApiClassOptions } from './baseAPI';
import { BinanceApiConfig } from './type';
import { CoinInformation, OrderACKResponse, OrderFULLResponse, OrderRESULTResponse, SpotAccountSnapshotResponse } from './responseType';
import { GetAccountSnapshotRequest, GetAllCoinsInformationRequest, SendNewOrderRequest } from './requestType';
export declare class PrivateApiClass extends BaseApiClass {
    private static toSha256;
    private readonly apiKey;
    private readonly apiSecret;
    constructor(config: BinanceApiConfig, options?: BaseApiClassOptions);
    getAllCoinsInformation(params: GetAllCoinsInformationRequest): Promise<CoinInformation[]>;
    getAccountSnapshot(params: GetAccountSnapshotRequest): Promise<SpotAccountSnapshotResponse>;
    sendTestNewOrder(params: SendNewOrderRequest): Promise<{}>;
    sendNewOrderACK(params: SendNewOrderRequest): Promise<OrderACKResponse>;
    sendNewOrderRESULT(params: SendNewOrderRequest): Promise<OrderRESULTResponse>;
    sendNewOrderFULL(params: SendNewOrderRequest): Promise<OrderFULLResponse>;
    get<T>(path: string, query?: {}): Promise<any>;
    post<T>(path: string, body: {}): Promise<any>;
    private makeHeader;
    private makeSignature;
}
