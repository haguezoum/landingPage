import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDark: false,
  },
  mutations: {
    SET_THEM_DARK(state, value) {
      state.isDark = value;
    },
  },
  getters: {
    isThemDark: (state) => state.isDark,
  },
  actions: {},
  modules: {},
});
