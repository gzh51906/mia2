import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
// const nanshig = axios.create({  //私人订制
//   // 默认配置
//   baseURL: 'https://www.nanshig.com/mobile/index.php'
// });
// Vue.prototype.$nanshig = nanshig;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
