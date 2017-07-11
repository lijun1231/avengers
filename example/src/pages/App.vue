<template>
    <div>
        <p>{{message}}</p>
        <input v-model="message">
        <!-- <list></list> -->
    </div>
</template>

<script>
import List from './list/list.vue';
// import dataController from '../../../../kit/progressive-cache/index.js';
// import service from '../service/service.js';
// import model from '../service/data-stock/model.js';
export default {
    components: {
        List,
    },
    data: function () {
        return {
            message: 'Hello Vue.js!'
        };
    },
    created () {
        // dataController.init({
        //     ajax: service.fetch,
        //     model: model,
        //     loginFreshOption: {
        //         cookieName: 'authsid',
        //         storage: window.sessionStorage
        //     },
        //     prefetchList: [{
        //         name: 'getAuthType',
        //     }, {
        //         name: 'getAuthItems',
        //         params: { authType: 1 },
        //     }]
        // });
    }
};
</script>

<style scoped>
    input {
        border: 1px solid #666;
    }
</style>
