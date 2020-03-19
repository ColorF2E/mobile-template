import Vue from 'vue';
import store from './store';
import router from './router';

// mand UI 组件
import mandMobile from 'mand-mobile';
import 'mand-mobile/lib/mand-mobile.css';

import './main.scss';
// import './utils/flexible.min.js';
import './utils/date';

// 接口
import CommonService from 'services/common';

// 微信 SDK
// import wx from 'weixin-js-sdk';

Vue.use(mandMobile);
// Vue.use(WsSocket);

// window.Toast = mandMobile.Toast;
// window.domain = 'https://esm-test.ishangzu.com/';

window.App = new Vue({
    el: '#app',
    store,
    router,
    template: `
        <div class="app">
            <keep-alive> 
                <router-view v-if="$route.meta.keepAlive"></router-view> 
            </keep-alive> 
            <router-view v-if="!$route.meta.keepAlive"></router-view> 
        </div>
    `,
    methods: {},
    beforeCreate() {
        // 获取字典
        this.$store.dispatch('getDict');
    },
    mounted() {
        // this.getTicket([ 'chooseImage', 'previewImage', 'uploadImage', 'getLocalImgData']);
    }
});