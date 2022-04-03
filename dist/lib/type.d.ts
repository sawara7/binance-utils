export interface ApiConfig {
    endPoint?: string;
    keepAlive?: boolean;
    timeout?: number;
}
export interface BinanceApiConfig extends ApiConfig {
    apiKey: string;
    apiSecret: string;
}
export declare const BinanceOrderParis: readonly ["btc_jpy"];
export declare type BitbankOrderPair = typeof BinanceOrderParis[number];
