import * as http from 'http';
import * as https from 'https';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ApiConfig } from './type';

export interface BaseApiClassOptions {
    optionsCallback?: Function;
    responseCallback?: Function;
}

export class ApiError extends Error {
    code: number = 0;
    message: string = '';
    data: any;
    constructor(code: number, message: string, data?: any){
        super('API_ERROR');
        this.code = code;
        this.message = message;
        this.data = data;
    }
}

export class BaseApiClass {
    readonly endPoint: string;
    readonly keepAlive: boolean;
    readonly timeout: number;
    readonly optionsCallback?: Function;
    readonly responseCallback?: Function;

    constructor(config: ApiConfig, options?: BaseApiClassOptions) {
        this.endPoint = config.endPoint || "";
        this.keepAlive = config.keepAlive || false;
        this.timeout = config.timeout || 3000;
    if (options) {
        this.optionsCallback = options.optionsCallback;
        this.responseCallback = options.responseCallback;
        }
    }

    async get(path: string, params?: {}, headers?: {}) {
        return this.request('GET', path, params, undefined, headers);
    }

    async post(path: string, data?: {}, headers?: {}) {
        return this.request('POST', path, undefined, data, headers);
    }

    async put(path: string, data?: {}, headers?: {}) {
        return this.request('PUT', path, undefined, data, headers);
    }

    async request(method: string, path: string, params?: {}, data?: {}, headers?: {}) {
        const options = {
            method: method,
            baseURL: this.endPoint,
            url: path,
            // timeout: this.timeout
            // httpAgent: new http.Agent({ keepAlive: this.keepAlive }),
            // httpsAgent: new https.Agent({ keepAlive: this.keepAlive })
        }

        if (params && Object.keys(params).length > 0) {
            Object.assign(options, { params });
        }
        if (data && Object.keys(data).length >= 0) {
            Object.assign(options, { data });
        }
        if (headers && Object.keys(headers).length > 0) {
            Object.assign(options, { headers });
        }

        if (this.optionsCallback) {
            await this.optionsCallback(options);
        }

        try {
            const res = await axios.request(options as AxiosRequestConfig<any>);
            if (this.responseCallback) {
                this.responseCallback(res.data);
            }
            return res.data;
        }catch(e){
            const err = e as AxiosError;
            let code = 0;
            let message = err.message;
            let data;
            if (err.response) {
                code = err.response.status;
                data = err.response.data;
            }
            throw new ApiError(code, message, data);
        }
    }
}
