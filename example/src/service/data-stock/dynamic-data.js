/* eslint-disable */
const MS_DAY = 86400000; // 天小时的毫秒数：24 * 3600 * 1000;
export default {
    getAuthType: {},
    getAuthItems: {
        period: MS_DAY,
        interface: 'getAuthItems',
        defCheckTrigger() {
            return new Promise((resolve) => {
                resolve(false);
            });
        },
    },
    getAuthContents: {
        period: MS_DAY,
    },
    getApplications: {
        period: MS_DAY
    }
}
