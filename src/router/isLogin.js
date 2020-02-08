import router from "./routes";
import NProgress from 'nprogress' // 进度条插件
import 'nprogress/nprogress.css' // 进度条样式

/*NProgress 进度条设置*/
// NProgress.configure({
    // minimum: 0.1, //  修改最小百分比
    // ease: 'ease', // 通过 ease(一个 CSS 中的 easing 值) 调整动画设置和速度 speed （毫秒ms）。
    // speed: 1000,
    // showSpinner: false, // 禁用进度设置 showSpinner 为 false。
// });

router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})

router.afterEach(() => {
    NProgress.done();
});
