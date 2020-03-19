import tpl from './index.html';
import './index.scss';

export default {
    name: 'portal',
    template: tpl,
    data() {
        return {selectedPage: 'home'};
    },
    watch: {selectedPage(newVal) {}},
    methods: {},
    mounted() {},
    
};