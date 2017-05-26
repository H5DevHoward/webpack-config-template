const index = resolve => require(['@/views/home/index'], resolve);

export default [
    {
        path: '/home/index',
        name: '系统首页',
        meta: {
            needAuth: true,
        },
        component: index,
    },
];
