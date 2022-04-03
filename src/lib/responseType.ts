export interface Response<T> {
    success: number;
    data: T;
}

export interface SymbolInfo {
    symbol: string; //ETHBTC;
    status: string; //TRADING;
    baseAsset: string; //ETH;
    baseAssetPrecision: number;  //8;
    quoteAsset: string; //BTC;
    quotePrecision: number; //8;
    quoteAssetPrecision: number; //8;
    orderTypes: string[];
    // [
    //   LIMIT;
    //   LIMIT_MAKER;
    //   MARKET;
    //   STOP_LOSS;
    //   STOP_LOSS_LIMIT;
    //   TAKE_PROFIT;
    //   TAKE_PROFIT_LIMIT
    // ];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: string[];
        //These are defined in the Filters section.
        //All filters are optional
    permissions: string[];
    // [
    //    SPOT;
    //    MARGIN
    // ]
}

export interface ExchangeResponse {
    timezone: string; //UTC;
    serverTime: number; //1565246363776;
    rateLimits: string[];
        //These are defined in the `ENUM definitions` section under `Rate Limiters (rateLimitType)`.
        //All limits are optional
    exchangeFilters: string[];
      //These are the defined filters in the `Filters` section.
      //All filters are optional.
    symbols: SymbolInfo[];
}

export interface OrderBookResponse {
    lastUpdateId: number;
    bids: string[];
    asks: string[]
}

export interface OrderACKResponse {
    symbol: string;
    orderId: number;
    orderListId: number; //Unless OCO; value will be -1
    clientOrderId: string;
    transactTime: number;
}

export interface OrderRESULTResponse {
    symbol: string;
    orderId: number;
    orderListId: number; //Unless OCO; value will be -1
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
    orderListId: number; //Unless OCO; value will be -1
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

export interface CoinInformation{
    coin: string; //BTC
    depositAllEnable: boolean;
    free: number; //0.08074558;
    freeze: number; //0.00000000;
    ipoable: number; //0.00000000;
    ipoing: number; //0.00000000;
    isLegalMoney: boolean;
    locked: number;
    name: string;
    // networkList: [
    //     {
    //         addressRegex: ^(bnb1)[0-9a-z]{38}$;
    //         coin: BTC;
    //         depositDesc: Wallet Maintenance; Deposit Suspended; // shown only when depositEnable is false.
    //         depositEnable: false;
    //         isDefault: false;        
    //         memoRegex: ^[0-9A-Za-z\\-_]{1;120}$;
    //         minConfirm: 1;  // min number for balance confirmation
    //         name: BEP2;
    //         network: BNB;            
    //         resetAddressStatus: false;
    //         specialTips: Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance.;
    //         unLockConfirm: 0;  // confirmation number for balance unlock 
    //         withdrawDesc: Wallet Maintenance; Withdrawal Suspended; // shown only when withdrawEnable is false.
    //         withdrawEnable: false;
    //         withdrawFee: 0.00000220;
    //         withdrawMin: 0.00000440
    //     };
    //     {
    //         addressRegex: ^[13][a-km-zA-HJ-NP-Z1-9]{25;34}$|^(bc1)[0-9A-Za-z]{39;59}$;
    //         coin: BTC;
    //         depositEnable: true;
    //         insertTime: 1563532929000;
    //         isDefault: true;
    //         memoRegex: ;
    //         minConfirm: 1; 
    //         name: BTC;
    //         network: BTC;
    //         resetAddressStatus: false;
    //         specialTips: ;
    //         unLockConfirm: 2;
    //         updateTime: 1571014804000; 
    //         withdrawEnable: true;
    //         withdrawFee: 0.00050000;
    //         withdrawIntegerMultiple: 0.00000001;
    //         withdrawMin: 0.00100000
    //     }
    // ];
    storage: number; //0.00000000;
    trading: boolean; //true;
    withdrawAllEnable: boolean; //true;
    withdrawing: number; //0.00000000
}

export interface SpotAccountSnapshotResponse {
    code: number; // 200 for success; others are error codes
    msg: string; // error message
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