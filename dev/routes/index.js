import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import routes from './map/'; // 路由映射
import hooks from './hooks/'; // 路由钩子

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'hash|history|abstract',
    base: '/',
    // linkActiveClass: 'router-link-active',
    // scrollBehavior: fn
    routes,
});

hooks(router);

if (window.localStorage.getItem('token')) {
    store.commit('LOGIN', {
        user: JSON.parse(window.localStorage.getItem('user')),
        token: window.localStorage.getItem('token'),
    });
}

/**
 * 调用 router.start(App, '#app') 后，根组件实例就会暴露到 router.app
 * 组件内部可通过 this.$root 访问，外部则可通过 router.app 进行访问
 */
export default router;
