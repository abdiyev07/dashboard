import Vue from "vue";
import Vuex from "vuex";
import dashboard from "./modules/dashboard";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false
  },
  getters: {
    getModalValue: state => state.showModal
  },
  mutations: {
    CLOSE_MODAL: state => state.showModal = false,
    SHOW_MODAL : state => state.showModal = true
  },
  actions: {},
  modules: {
    dashboard
  }
});
