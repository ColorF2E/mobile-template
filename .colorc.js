const path = require('path');
const cwd = process.cwd();

const resolve = (dir) => {
    return path.join(cwd, dir);
};

var proxy_url = 'http://erp.ishangzu.com'

module.exports = {
    href: 'mobile.tianque.com',
    port: 8084,
    proxy: {
        '/isz_base': {
            target: proxy_url,
            changeOrigin: true
        }
    },
    webpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                'config$': resolve('config.js'),
                'views': resolve('src/views'),
                'portal': resolve('src/views/portal'),
                'services': resolve('src/services'),
                'utils$': resolve('src/utils/index.js'),
                'static$': resolve('static')
            }
        }
    },
    eslint: {
        ignore: []
    },

    // 符合 vscode 格式化代码规范
    rules: {
        "space-before-blocks": "error",
    }, // eslint's rules

    // postcss-pxtorem 配置
    postcssPlugins: {
        rootValue: 30,
        minPixelValue: 2,
        propWhiteList: [],
    },

    updateList: [ // 需要更新的文件
        'src/router/index.js',
        'src/service/http.js',
        'src/views/login',
        'src/views/portal',
        'src/views/screen',
        'src/App.vue',
        'src/main.js',
        'src/main.scss',
        'static',
        '.gitignore',
        'package.json',
        'tpl.html',
        '.eslintrc.js',
        '.colorc.js', // 升级模板时，将会强制更新本文件
        '!.babelrc', // 前缀为 '!' ，代表将会被删除
    ],
    _meta: { // 请勿删除
        type: 'Mobile', // 模板类型
        version: '1.0.0', // 模板的版本
    }
}