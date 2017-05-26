/**
 * beforeEach 与 afterEach 最显著的区别是后者无法调用任何切换函数，详见：
 * https://github.com/vuejs/vue-router/blob/1.0/docs/zh-cn/api/before-each.md
 * https://github.com/vuejs/vue-router/blob/1.0/docs/zh-cn/api/after-each.md
 */
import authInterceptor from './beforeEach/';
import simpleLogger from './afterEach/';

export default router => {
    router.beforeEach(authInterceptor);
    router.afterEach(simpleLogger);
};
