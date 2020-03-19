import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes
});

router.beforeEach((route, redirect, next) => {
    let name = route.name;
    if (!name) {
        name = '天阙服务端';
    }
    document.title = name;
    next();
});

export default router;
