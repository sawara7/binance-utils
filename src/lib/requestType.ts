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
    newClientOrderId?: string; //NO	A unique id among open orders. Automatically generated if not sent.
    stopPrice?: number; //NO	Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
    icebergQty?: string; //NO	Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
    newOrderRespType?: string; //NO	Set the response JSON. ACK, RESULT, or FULL; MARKET and LIMIT order types default to FULL, all other orders default to ACK.
    recvWindow?: number; //NO	The value cannot be greater than 60000
    timestamp: number;
}

export interface GetAllCoinsInformationRequest {
    recvWindow?: number;
    timestamp: number;
}

export interface GetAccountSnapshotRequest {
    type :string; //STRING	YES	"SPOT", "MARGIN", "FUTURES"
    startTime? :string; //LONG	NO	
    endTime? :string; //LONG	NO	
    limit? :number; //INT	NO	min 5, max 30, default 5
    recvWindow? :number; //LONG	NO	
    timestamp: number;	//LONG	YES
}