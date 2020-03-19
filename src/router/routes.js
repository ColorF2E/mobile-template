import NotFound from 'views/errors/Not_found';
import ServerError from 'views/errors/Server_error';

import Portal from 'views/portal';
import Login from 'views/login';


const redirectPath = localStorage.getItem('userInfo') ? '/mobile/index' : '/mobile/login';

let routes = [
    { path: '/', redirect: redirectPath },
    {
        path: '/mobile/index', component: Portal, children: [
            // { path: '/mobile/my', component: My, name: '个人中心', meta: { keepAlive: true } },
            // { path: '/mobile/home', component: Home, name: '服务端首页', meta: { keepAlive: true, isRefresh: true } },
            // { path: '/mobile/message', component: Message, name: '消息中心', meta: { keepAlive: true } },
        ]
    },
    { path: '/mobile/login', component: Login },
    { path: '/404', component: NotFound },
    { path: '/500', component: ServerError },
    { path: '*', redirect: { path: '/404' } }
];

export default routes;
