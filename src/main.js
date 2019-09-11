import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.prototype.$store = store;

const home = axios.create({  //私人订制
  baseURL: 'http://47.104.103.240:9601/home'
});
const user = axios.create({  //私人订制
  baseURL: 'http://47.104.103.240:9601/user'
});
const order = axios.create({  //私人订制
  baseURL: 'http://47.104.103.240:9601/order'
});
const list = axios.create({  //私人订制
  baseURL: 'http://47.104.103.240:9601/list'
});
const add = axios.create({  //私人订制
  baseURL: 'http://47.104.103.240:9601/add'
});
const login = axios.create({  //私人订制
  baseURL: 'http://47.104.103.240:9601/login'
});

Vue.prototype.$home = home;
Vue.prototype.$user = user;
Vue.prototype.$order = order;
Vue.prototype.$list = list;
Vue.prototype.$add = add;
Vue.prototype.$login = login;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
