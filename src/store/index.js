import Vue from 'vue'
import Vuex from 'vuex'    //请求
Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        flag: false
    },
    getters: {

    },
    mutations: {
        async changeflag(state, flag) {
            state.flag = flag;
        }

    }
})

export default store;