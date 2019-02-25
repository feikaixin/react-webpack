# 一个实现react+webpack按需加载的例子
# 一个简单实现react-router的例子


遇到无法命中路由的问题解决方法：
1、historyApiFallback: true
2、设置proxy ：
    ```
        proxy: {
            "/": {
                bypass: function(req, res, proxyOptions) {
                console.log('Skipping proxy for browser request.')
                return `/index.html`
                }
            }
        }
    ```

路由无法命中的原因
因为我们用的是webpack-dev-server，默认是没有作特殊处理的，所以服务器会尝试去寻找网页服务器根目录下(我们package.json上面设置的根目录是./)c.html文件。因为这个页面是由React通过浏览器渲染出来，所以当然不可能在服务器上找得到了。所以这个时候服务器就会返回一个404 Page Not Found错误。