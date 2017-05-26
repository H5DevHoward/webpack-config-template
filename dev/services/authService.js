import xhr from './xhr/';
import store from '@/store';
import router from '@/routes';

/**
 * 用户认证所用到的 API
 */
class AuthService {

    /**
     * 检测当前用户是否已经登录
     * @resolve {Object} userData / null
     */
    checkLogin() {
        return xhr({
            url: '/auth/checkLogin',
        });
    }

    /**
     * 登录
     * @param  {String} userData.username
     * @param  {String} userData.password
     * @return {Object} userData
     */
    login(userData) {
        return xhr({
            // method: 'post',
            url: 'assets/data.json', // '/auth/login',
            body: userData,
        });
    }

    /**
     * 注销登录
     * @return {Promise}
     */
    logout() {
        // return xhr({
        //     method: 'delete',
        //     url: '/auth/logout',
        // });
        store.dispatch('logout');
        router.replace('/auth/login');
    }

}

// 实例化后导出，全局单例
export default new AuthService();
