import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

const listener = store => {
    if (!sessionStorage) {
        return;
    }
    store.subscribe((mutation, state) => {
        sessionStorage.setItem('state', JSON.stringify(state));
    });
};

const state = { dict: {} };
export default new Vuex.Store({
    state,
    modules: {},
    mutations,
    actions,
    // plugins: [listener]
});

