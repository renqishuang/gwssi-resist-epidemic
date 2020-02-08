import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import state from './state'
import mutations from './mutations'


Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    modules: {
        
    },
    getters
})

export default store
