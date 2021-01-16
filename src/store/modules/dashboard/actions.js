export const SET_DASHBOARD_LIST = ({commit}, payload) => commit("SET_DASHBOARD_LIST", payload);
export const ADD_DASHBOARD_ITEM = ({ commit }, payload) => commit("ADD_DASHBOARD_ITEM", payload);
export const TOGGLE_DRAGGABLE = ({ commit }) => commit("TOGGLE_DRAGGABLE");
export const SET_SELECTED_CARD = ({commit}, payload) => commit("SET_SELECTED_CARD", payload)