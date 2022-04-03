import { ApiConfig } from './type';
export interface BaseApiClassOptions {
    optionsCallback?: Function;
    responseCallback?: Function;
}
export declare class ApiError extends Error {
    code: number;
    message: string;
    data: any;
    constructor(code: number, message: string, data?: any);
}
export declare class BaseApiClass {
    readonly endPoint: string;
    readonly keepAlive: boolean;
    readonly timeout: number;
    readonly optionsCallback?: Function;
    readonly responseCallback?: Function;
    constructor(config: ApiConfig, options?: BaseApiClassOptions);
    get(path: string, params?: {}, headers?: {}): Promise<any>;
    post(path: string, data?: {}, headers?: {}): Promise<any>;
    put(path: string, data?: {}, headers?: {}): Promise<any>;
    request(method: string, path: string, params?: {}, data?: {}, headers?: {}): Promise<any>;
}
