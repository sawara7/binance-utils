export interface ApiConfig {
    endPoint?: string;
    keepAlive?: boolean;
    timeout?: number;
}

export interface BinanceApiConfig extends ApiConfig {
    apiKey: string;
    apiSecret: string;
}

export const BinanceOrderParis = [
    "btc_jpy"
] as const;
export type BitbankOrderPair = typeof BinanceOrderParis[number];
