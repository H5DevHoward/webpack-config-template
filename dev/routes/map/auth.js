const login = resolve => require(['@/views/auth/login'], resolve);
const logout = resolve => require(['@/views/auth/logout'], resolve);
const info = resolve => require(['@/views/auth/info'], resolve);

export default [
    {
        path: '/auth/login',
        name: '用户登录',
        component: login,
    },
    // {
    //     path: '/auth/logout',
    //     name: '用户登出',
    //     component: logout,
    // },
    {
        path: '/auth/info',
        name: '用户信息',
        meta: {
            needAuth: true,
        },
        component: info,
    },
];
