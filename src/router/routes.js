import Vue from 'vue'
import router from 'vue-router'

Vue.use(router);

/**
 * 简化router文件封装path函数
 * {[String]} path          定义页面路由路径
 * {[String]} name          挂在文件名字
 * {[String]} boolean       是否隐藏左侧导航栏标签 true为隐藏 false显示
 * {[string]} url           进入路由的配置路径
 * {Object} [other={}]      路由其他参数
 * {Array}  [children=[]]   嵌套（子）路由配置
 * {Object}                 返回router可用obj
 */
function path(path, name, boolean, url, other = {}, children = []) {
    return Object.assign({
        path: path,
        name: name,
        hidden: boolean,
        // component: resolve => require(['pages/' + url + '.vue'], resolve),
        component: () => import('views/' + url),
        // component:  resolve => require.ensure([], () => resolve (require('pages/' + url + '.vue')), 'pack'),
        children: children,
    }, other)
}


const routes = [
    path('*', '', true, '404',{redirect: { path: '/404' }}),// 404页面
    path('/404', '', true, '404'),// 404页面
    path('/', '', true, 'login'),// 404页面
];

export default new router({
    base: '',
    mode: 'history',
    routes: routes
});

