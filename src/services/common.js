import Http from './http';

export default {
    //获取字典
    getDictList() {
        return Http.$get('/esm_supplierapp/CommDictController/getDictLists');
    },
    //网页授权
    authorize(params) {
        return Http.$post('/esm_supplierapp/WechatUtilController/webAuthorization', params);
    },
    // //js-sdk使用权限签名
    // getTicket(params){
    //     return Http.$post('/esm_supplierapp/WechatUtilController/geTicket', params);
    // },
    // //获取code地址
    // getCodeUrl(params){
    //     return Http.$post('/esm_supplierapp/WechatUtilController/getCodeUrl', params);
    // }
};
