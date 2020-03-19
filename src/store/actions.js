import CommonServices from 'services/common';
import * as types from './mutation_types';

export default {
    getDict({commit}) {
        // 获取数据字典
        // CommonServices.getDictList()
        //     .then(res => {
        //         if (res && res.obj) {
        //             commit(types.SET_DICT, res.obj);
        //         } else {
        //             console.error('获取字典失败');
        //         }
        //     });
    }
};
