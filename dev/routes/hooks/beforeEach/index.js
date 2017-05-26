import store from '@/store';

const authInterceptor = (to, from, next) => {
    // needAuth：需要登录后访问
    const {meta, path} = to;

    if (meta.needAuth) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath,
                },
            });
        }
    } else {
        next();
    }
};

export default authInterceptor;
