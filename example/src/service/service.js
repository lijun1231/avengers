/* eslint-disable */
import Vue from 'vue';
import interfaces from './interfaces';
import util from '../lib/util';
import { SERVER_TYPE } from './service-config';
import axios from 'axios';

export default {
    // fetch
    fetch (name, p) {
        let d = interfaces[name];
        let url;
        let type;
        let r;// 返回promise
        p = p || {};
        if (!d) {
            console.error(`${name} 接口未定义`);
            return null;
        }

        // 设置url和type
        if (typeof d === 'string') {
            url = util.getOriginUrl(d);
            type = SERVER_TYPE;
        } else {
            url = util.getOriginUrl(d[0]);
            type = d[1] || SERVER_TYPE;
            let filter = d[2];
            if (filter && typeof filter === 'function') {
                p = filter(p);
            }
        }

        // 发送请求
        if (type && type.toLowerCase === 'post') {
            // post请求
            r = axios.post(url, p)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            // get请求
            r = axios.get(url, {
                    params: p
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        return r;
    },
};
