import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
import Nav_Head from '../html/nav_head.vue'
import Home from '../html/Home.vue'
import Login from '../html/Login.vue'
let router = new VueRouter({
    routes: [
        {
            name: "nav_head",
            path: '/nav_head',
            component: Nav_Head,
            meta: { requireAuth: 'true' },
            children:
                [{
                    name: 'home',
                    path: 'home',
                    meta: { requireAuth: 'true' },
                    component: Home
                }]
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
        }, {
            path: '/',//重定向
            redirect: '/login'
        }]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (Vue.prototype.$store.state.flag != 'true') {
            next({ path: '/login' });
        } else {
            next();
        }
    }
    else {
        next();
    }



})


export default router;