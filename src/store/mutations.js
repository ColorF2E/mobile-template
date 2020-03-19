import * as types from './mutation_types';

export default {
    [types.SET_DICT](state, newDict) {
        state.dict = newDict;
    }
};
