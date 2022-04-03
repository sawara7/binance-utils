export interface GetOpenOrderRequest {
    symbol: string;
    limit?: number;
}
export interface SendNewOrderRequest {
    symbol: string;
    side: string;
    type: string;
    timeInForce?: string;
    quantity?: number;
    quoteOrderQty?: number;
    price?: number;
    newClientOrderId?: string;
    stopPrice?: number;
    icebergQty?: string;
    newOrderRespType?: string;
    recvWindow?: number;
    timestamp: number;
}
export interface GetAllCoinsInformationRequest {
    recvWindow?: number;
    timestamp: number;
}
export interface GetAccountSnapshotRequest {
    type: string;
    startTime?: string;
    endTime?: string;
    limit?: number;
    recvWindow?: number;
    timestamp: number;
}
