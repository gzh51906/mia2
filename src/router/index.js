import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
import Nav_Head from '../html/nav_head.vue'
import Home from '../html/Home.vue'
import Login from '../html/Login.vue'
import Add from '../html/Add.vue'
import Homelist from '../html/Homelist.vue'
import List from '../html/Listdouble.vue'
import Userslist from '../html/Userslist.vue'
import Order from '../html/Orderlist.vue'
import Detaillist from '../html/Detaillist.vue'
import Kind from '../html/Kindlist.vue'


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
                },
                {
                    name: 'homelist',
                    path: 'homelist',
                    meta: { requireAuth: 'true' },
                    component: Homelist
                },
                {
                    name: 'list',
                    path: 'list',
                    meta: { requireAuth: 'true' },
                    component: List
                },
                {
                    name: 'add',
                    path: 'add',
                    meta: { requireAuth: 'true' },
                    component: Add

                },
                {
                    name: 'userslist',
                    path: 'userslist',
                    meta: { requireAuth: 'true' },
                    component: Userslist
                },
                {
                    name: 'order',
                    path: 'order',
                    meta: { requireAuth: 'true' },
                    component: Order
                },
                {
                    name: 'detaillist',
                    path: 'detaillist',
                    meta: { requireAuth: 'true' },
                    component: Detaillist
                }, {
                    name: 'kind',
                    path: 'kind',
                    meta: { requireAuth: 'true' },
                    component: Kind

                }
                ]
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

router.beforeEach(async (to, from, next) => {  //路由拦截，没登陆不让进页面,连接数据库判断的
    let res = await Vue.prototype.$login({ method: 'get' });
    if (to.meta.requireAuth) {
        if (res.data[0].status != "1") {  //没登陆，跳到登陆页面
            next({ path: '/login' });
        } else {
            next();
        }
    }
    else {
        if (res.data[0].status == "1") {
            next({ path: '/nav_head/home' })  //如果登陆了,但进入login页面时,自动跳转到home页

        } else {
            next();
        }
    }



})


export default router;