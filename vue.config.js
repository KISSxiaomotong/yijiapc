module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    assetsDir: "./",
    devServer: {
        proxy: {
            '/proxy/': {
                'target': 'http://sbo.natapp1.cc',
                'secure': false, // false为http访问，true为https访问
                'changeOrigin': true, // 跨域访问设置，true代表跨域
                'pathRewrite': { // 路径改写规则
                    '^/proxy': '' // 以/proxy/为开头的改写为''
                }
            }
        }
    },
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.js'
        },
        subpage: 'src/main.js'
    },
    lintOnSave: true,

    runtimeCompiler: false,

    transpileDependencies: [],

    productionSourceMap: true,

    // CSS 相关选项
    css: {
        extract: true,
        sourceMap: false,
        requireModuleExtension: true
    },
    pwa: {},
    pluginOptions: {
        // ...
    }
};