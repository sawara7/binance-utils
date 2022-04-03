import { PublicApiClass } from "./publicAPI";

(async ()=>{
    const api = new PublicApiClass({
        endPoint: '',
        keepAlive: false,
        timeout: 3000
    })
    console.log(await api.ping());
    console.log(await api.checkServerTime());
    console.log(await api.getOrderBook({symbol:'USDCBUSD'}));
    const res = await api.getExchangeInfo();
    const symbols = res.symbols;
    for (const s of symbols){
        if (s.symbol === 'LTCBTC'){
            console.log(s);
        }
    }
})()