/* eslint-disable */
let serverPro = 'http://hbdataauth.hbdata.vip.sankuai.com'; // 线上域名
let serverDev = 'http://hbdataauth.hbdata.st.sankuai.com'; // 测试域名
let server, serverType;
if (window.env === 'pro') {
    if (location.host === 'awp.sankuai.com') {
        // 线上环境
        server = serverPro;
        serverType = 'post';
    } else {
        // 非线上环境，包含[无限套预发环境]
        server = serverDev;
        serverType = 'post';
    }
} else {
    // 测试环境
    server = serverDev;
    serverType = 'get';
}

// 接口地址和请求方式
export const SERVER = server;
export const SERVER_TYPE = serverType;

// 域名白名单（允许跨域）
export const WHITE_LIST = ['awp-assets.meituan.net'];
