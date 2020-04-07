module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    assetsDir: "./",
    devServer: {
        proxy: {
            '/proxy/': {
                'target': 'http://47.96.106.248:8068/',
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

    transpileDependencies: ['element-ui'],

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
    },
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    }
};