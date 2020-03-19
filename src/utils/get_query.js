export default {
    // 获取url中"?"截取参数
    GetQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        if (!location.hash.split('?')[1]) {
            return '';
        }
        let r = location.hash.split('?')[1].match(reg); //获取url中"#"符后的字符串并正则匹配
        let context = "";
        if (r !== null) {
            context = r[2];
            reg = null;
            r = null;
        }
        return context === null || context === "" || context === "undefined" ? "" : context;
    }
}