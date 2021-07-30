import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDark: false,
    menuOpen: false,
    modelIsOpen:false,
    navLinks: [
      { name: "feature", id: "feature" },
      { name: "testimonials", id: "testimonials" },
      { name: "pricing", id: "pricing" },
      { name: "fAQ", id: "faq" },
      { name: "contact us", id: "contact" },
    ]
  },
  getters: {
    isThemDark: (state) => state.isDark,
  },
  mutations: {
    SET_THEM_DARK(state, value) {
      state.isDark = value;
    },
    toggleModel:state=>{
      state.modelIsOpen = !state.modelIsOpen;
      if(state.modelIsOpen){
        alert("Hello")
      }
    }
  },
  actions: {},
  modules: {},
});
