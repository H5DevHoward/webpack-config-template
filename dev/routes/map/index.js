// 不同功能模块的路由应代码分离
import authRoutes from './auth';
import homeRoutes from './home';

const index = resolve => require(['@/views/index'], resolve);
const shop = resolve => require(['@/views/ShoppingCartComponent'], resolve);
const search = resolve => require(['@/views/SearchComponent'], resolve);


export default [
    // Vue 没有强制刷新操作，这算是 hack（使用 canReuse 可以解决部分问题）
    // 用法1：<a v-link="{ path: '/redirect', query: { dest: '/xxx' } }">
    // 用法2：<a v-link="`/redirect?dest=/xxx`">
    // 用法3：this.$router.go('/redirect?dest=/xxx')
    // '/redirect': {
    //     component: {
    //         init() {
    //             this.$router.replace({
    //                 path: decodeURIComponent(this.$route.query.dest || '/'),
    //                 force: true,
    //             });
    //         },
    //         template: '<span></span>',
    //     },
    // },
    {
        path: '/',
        name: '首页',
        component: index,
    },
    {
        path: '/shop',
        name: '购物车',
        component: shop,
    },
    {
        path: '/search',
        name: '查询',
        component: search,
    },
    ...authRoutes,
    ...homeRoutes,
    { // 404 置后
        path: '*',
        component: {
            beforeCreate() {
                alert('[warning] 404 NOT FOUND');
                this.$router.replace('/');
            },
            template: '<div></div>',
        },
    },
];
