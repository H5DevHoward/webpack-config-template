import 'babel-polyfill';
import Vue from 'vue';
import App from './components/App.vue';

const app = new Vue({
    components: {
        App,
    },
}).$mount('#root');
