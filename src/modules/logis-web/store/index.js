import Vue from 'vue'
import Vuex from 'vuex'


import menu from './menu'
Vue.use(Vuex)

const state = {
  item : ''
}

const getters = {
 
}

const actions = {
  
}

const mutations = {
  
}

export default function createStore() {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
      menu
    }
  })
}
