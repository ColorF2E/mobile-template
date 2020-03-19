import tpl from './index.html';
import './index.scss';

import CommonService from 'services/common';

export default {
    name: 'login',
    template: tpl,
    data() {
        return {
            pswVisible: false,
            supplier_person_phone: '',
            password: '',
            isFocus: false,
            config: {},
            codeUrl: ''
        };
    },
    computed: {
        isDisabled() {
            return !this.supplier_person_phone || !this.password;
        }
    },
    methods: {
        validate() {
            if (!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(this.supplier_person_phone)) {
                this.$toast.info('请输入正确的手机号');
                return false;
            }
            return true;
        },
        preventBlur(ev) {
            ev.preventDefault();
        },
        clear(ev) {
            this.supplier_person_phone = '';
            this.$refs.phoneInput.blur();
        },
        login() {
            if (!this.validate()) {
                return;
            }
            console.log('login');
        },
        getCodeUrl() {
            this.$indicator.open({ text: '请稍后' });
            CommonService.getCodeUrl({ redirect_uri: encodeURIComponent(location.href.split('#')[0]) }).then((res) => {
                this.$indicator.close();
                if (res.code === 0) {
                    window.location.href = res.obj.codeUrl;
                    localStorage.setItem('codeUrl', res.obj.codeUrl);
                    this.codeUrl = res.obj.codeUrl;
                } else {
                    this.$toast({ message: res.msg });
                }
            });
        }
    },
    created() {
        //微信网页授权
        // if (!localStorage.getItem('codeUrl')) {
        //     this.getCodeUrl();
        // } 
    }
};