#vue-demo

根据`vue-hackernews-2.0`项目进行调整

####技术栈

|lib                        |describe|
|---                        |--- |
|compression                |http请求内容使用 gzip 进行压缩|
|cross-env                  |解决跨平台设置 NODE_ENV 的问题|
|element-ui                 |前端UI框架|
|es6-promise                |使用 Promise 語法糖，使用方式（import 'es6-promise/auto'）|
|express                    |基于 Node.js 的 web 开发框架|
|extract-text-webpack-plugin|分离CSS单独打包|
|lru-cache                  | |
|serve-favicon              |定义web页面标签的小图标|
|vue                        |前端模板框架|
|vue-router                 |vue路由組件|
|vue-server-renderer        |vue服務器端渲染組件|
|vuex                       |vue狀態管理組件|
|vuex-router-sync           |同步 Vuex 和 vue-router 的状态（效果就是注册了 store.state.route 这个变量，使得在 Vuex 的 Store 中可以获取到 route 对象）|
