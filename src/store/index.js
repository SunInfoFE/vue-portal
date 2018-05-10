'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import postLogin from '../api/login';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userName: '',
    portlets: []
  },
  mutations: {
    setUser (state, name) {
      state.userName = name;
    },
    setPortlets (state, portlets) {
      state.portlets = portlets;
    }
  },
  actions: {
    async login ({ commit }, params) {
      commit('setPortlets', await postLogin(params));
      commit('setUser', params.userName);
      return 'success';
    }
  }
});

export default store;
