import { getRealTimeDatabase } from "my-utils";
import { PrivateApiClass } from "..";

export async function getBinancePrivateAPI(): Promise<PrivateApiClass> {
    const rdb = await getRealTimeDatabase()
    const apiKey = await rdb.get(await rdb.getReference('settings/binance/apiKey')) as string
    const secret = await rdb.get(await rdb.getReference('settings/binance/apiSecret')) as string
    return new PrivateApiClass({
        apiKey: apiKey,
        apiSecret: secret
    })
}