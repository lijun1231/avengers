/*eslint-disable*/
export default {
    getInitData: ['/web/getInitData', 'get', op => {
        return op;
    }],
    getAuthType: ['/web/getAuthType'],
    getApplications: '/web/getApplications',
    getAuthItems: '/web/getAuthItems',
    getAuthContents: '/web/getAuthContents',
    getOrgTree: '/web/getOrgTree',
    applyCommit: '/web/applyCommit',
    queryAuthApproval: '/web/queryAuthApproval',
    agreeAuthApproval: '/web/agreeAuthApproval',
    rejectAuthApproval: '/web/rejectAuthApproval',
    getMyAuth: '/web/getMyAuth',
};
