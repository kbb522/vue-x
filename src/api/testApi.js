let axios = require('axios')


// 单例
let __axiosInstance = function (settings) {
    return axios.create(settings);

    // let instance = null;
    // if (instance) return instance;
    // instance = axios.create(settings);
    // return instance;
};

// Axios 中文说明 https://www.kancloud.cn/yunye/axios/234845

let MakeParams = (settings = {}) => {
    if (settings === null || typeof settings !== 'object') {
        throw new Error('参数对象格式不正确')
    }
    // if (!settings.url || typeof settings.url !== 'string') {
    //     throw new Error('url参数为空或格式不正确')
    // }
    // let url = settings.url;
    let method = settings.method || "POST";
    let baseURL = settings.baseURL || '/web'; // TODO 配置全局变量
    let requestFilter = settings.requestFilter || [function (data, hander) {
        return JSON.stringify(data);
    }];
    let responseFilter = settings.responseFilter || [function (response) {
        return response;
    }];
    let data = settings.data || {};
    let timeout = settings.timeout || 5000;
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    let responseType = settings.responseType || 'json'; // 默认的
    let validateStatus = settings.validateStatus || function (status) {
        return status >= 200 && status < 300; // default
    };
    let headers = settings.headers || {
        'Content-Type': 'application/json',
        'Cookie': settings.cookie || ''
    };

    return {
        method, baseURL, requestFilter, responseFilter, data, timeout, responseType, validateStatus, headers
    }
}


let genericJsonRpc = (settings) => {

    return __axiosInstance(MakeParams(settings)); //.request({url, data})
}


function makeAjaxData(paramsMethod, params) {
    let data = {
        jsonrpc: '2.0',
        id: Math.floor(Math.random() * 1000 * 1000 * 1000),
        method: 'call',
        params: {
            method: paramsMethod,
            ...params,
            kwargs: {
                context: {
                    lang: 'zh_CN',
                    tz: false,
                    uid: 1,
                    bin_size: true,
                    future_display_name: true
                }
            }
        }

    };
    return data;
}


class Proxy {
    constructor(settings, cookie = '') {
        // 构造
        this.cookie = cookie
        this.rpc = genericJsonRpc(settings);
    }

    loginSystem(login, password, redirect) {
        let that = this;
        let url = "/web/login";

        return axios.post(url, 'login=' + login + '&password=' + password).then(function (response) {
            let cookie = response.headers['set-cookie'][0].split(';')[0];
            that.setSessionId(cookie);
            return cookie

        });
    }

    setSessionId(cookie) {
        //console.log(this.rpc.defaults)
        this.rpc.defaults.headers.Cookie = cookie;
    }

    read(params) {
        let url = `/dataset/call_kw/${params.model}/read`;

        let data = makeAjaxData('read', params);
        return this.rpc.request(url, {data});
    }

    search_read(params) {
        let url = '/dataset/search_read';

        let data = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                ...params,
                context: {
                    lang: 'zh_CN',
                    tz: false,
                    uid: 1,
                    //bin_size: true,
                    //future_display_name: true
                }
            },
            id: Math.floor(Math.random() * 1000 * 1000 * 1000)
        };
        return this.rpc.request(url, {data});
    }

    unlink(params) {
        let url = `/dataset/call_kw/${params.model}/unlink`;

        let data = makeAjaxData('unlink', params);
        return this.rpc.request(url, {data});
    }

    write(params) {
        let url = `/dataset/call_kw/${params.model}/write`;

        let data = makeAjaxData('write', params);
        return this.rpc.request(url, {data});
    }

    create(params) {
        let url = `/dataset/call_kw/${params.model}/create`;

        let data = makeAjaxData('create', params);
        return this.rpc.request(url, {data});
    }

    call(name) {

    }
}

let p = new Proxy;

export default p;
