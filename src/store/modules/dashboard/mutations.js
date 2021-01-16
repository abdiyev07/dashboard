export const SET_DASHBOARD_LIST = (state, payload) => (state.dashboardList = payload);
export const TOGGLE_DRAGGABLE = (state) => state.isDraggable = !state.isDraggable;
export const ADD_DASHBOARD_ITEM = (state, payload) => state.dashboardList.push(payload);
export const SET_SELECTED_CARD = (state, payload) => state.selectedCard = payload;