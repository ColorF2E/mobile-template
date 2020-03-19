import Http from 'brown-http';

const http = new Http(false, res => {
    if (res.status >= 400) {
        Toast({
            message: `服务出错，状态码：${res.status}`,
            duration: 5000
        });
        throw Error('服务出错');
    }
    //登录失效跳转
    // window['sessionFlg'] = window['sessionFlg'] || 'Y';
    // const code = Number(res.code);
    // if ((code === 201 || code === 200) && sessionFlg === 'Y') {
    //     window.location.replace(window.domain + '#/mobile/login');
    //     sessionFlg = 'N';
    //     return;
    // } else if (code === 0) {
    //     sessionFlg = 'Y';
    // }
    return res;
}, {}, err => {
    console.error(err);
});

export default http;