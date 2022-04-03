export interface Response<T> {
    success: number;
    data: T;
}
export interface SymbolInfo {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    quoteAssetPrecision: number;
    orderTypes: string[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: string[];
    permissions: string[];
}
export interface ExchangeResponse {
    timezone: string;
    serverTime: number;
    rateLimits: string[];
    exchangeFilters: string[];
    symbols: SymbolInfo[];
}
export interface OrderBookResponse {
    lastUpdateId: number;
    bids: string[];
    asks: string[];
}
export interface OrderACKResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
}
export interface OrderRESULTResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: number;
    origQty: number;
    executedQty: number;
    cummulativeQuoteQty: number;
    status: string;
    timeInForce: string;
    type: string;
    side: string;
}
export interface OrderFill {
    price: number;
    qty: number;
    commission: number;
    commissionAsset: string;
}
export interface OrderFULLResponse {
    symbol: string;
    orderId: number;
    orderListId: number;
    clientOrderId: string;
    transactTime: number;
    price: number;
    origQty: number;
    executedQty: number;
    cummulativeQuoteQty: number;
    status: string;
    timeInForce: string;
    type: string;
    side: string;
    fills: OrderFill[];
}
export interface CoinInformation {
    coin: string;
    depositAllEnable: boolean;
    free: number;
    freeze: number;
    ipoable: number;
    ipoing: number;
    isLegalMoney: boolean;
    locked: number;
    name: string;
    storage: number;
    trading: boolean;
    withdrawAllEnable: boolean;
    withdrawing: number;
}
export interface SpotAccountSnapshotResponse {
    code: number;
    msg: string;
    snapshotVos: SpotSnapshotVos[];
}
export interface SpotSnapshotVos {
    data: SpotBalances;
    type: string;
    updateTime: number;
}
export interface SpotBalances {
    balances: Asset[];
    totalAssetOfBtc: string;
}
export interface Asset {
    asset: string;
    free: string;
    locked: string;
}
