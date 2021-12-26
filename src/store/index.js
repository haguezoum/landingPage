import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDark: false,
    menuIsOpen: false,
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
      window.document.body.classList.toggle('dark')
    },
    toggleModel:state=>{
      state.modelIsOpen = !state.modelIsOpen;
      state.modelIsOpen?window.document.body.style='overflow:hidden;':window.document.body.style='overflow:auto;'
        
      
    },
    toggleMenu:state=>{
      state.menuIsOpen = ! state.menuIsOpen;
      state.menuIsOpen?window.document.body.style='overflow:hidden;':window.document.body.style='overflow:auto;'
    }
  },
  actions: {},
  modules: {},
});
