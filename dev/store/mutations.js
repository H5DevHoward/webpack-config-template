import types from './mutation-types';

export default {
    [types.INCREMENT] (state) {
        state.count += 1;
    },
    [types.DECREMENT] (state) {
        state.count -= 1;
    },
    [types.LOGIN] (state, payload) {
        localStorage.user = JSON.stringify(payload.user);
        localStorage.token = payload.token;
        state.user = payload.user;
        state.token = payload.token;
    },
    [types.LOGOUT] (state) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        state.user = null;
        state.token = null;
    },
};
