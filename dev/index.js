import 'babel-polyfill';
import 'whatwg-fetch';
import Vue from 'vue';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
import router from 'ROUTE';
import store from 'STORE';
import App from 'COMPONENT/App';

Vue.use(ElementUI);

const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('#root');
