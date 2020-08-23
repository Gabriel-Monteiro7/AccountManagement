import produce from "immer";
const INITIAL_STATE = {
  recipes: [],
  expenses: [],
  total: 0,
  chart: [],
};

export default function account(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    let { payload } = action;
    switch (action.type) {
      case "@account/GET_REQUEST": {
        break;
      }
      case "@account/GET_SUCCESS": {
        draft.recipes = payload.data.recipes;
        draft.expenses = payload.data.expenses;
        draft.total = payload.total;
        draft.chart = payload.chart;
        break;
      }
      case "@account/INSERT_REQUEST": {
        break;
      }
      case "@account/INSERT_SUCCESS": {
        draft[payload.type].push(payload.data);
        break;
      }
      case "@account/SELECTED_SUCCESS": {
        draft[payload.type] = payload.data;
        break;
      }
      case "@account/UPDATE_REQUEST":
        break;
      case "@account/UPDATE_SUCCESS": {
        draft[payload.type] = draft[payload.type].map((value) => {
          return value.id === payload.data.id ? payload.data : value;
        });
        break;
      }
      case "@account/DELETE_REQUEST":
        break;
      case "@account/DELETE_SUCCESS": {
        draft[payload.type] = draft[payload.type].filter((value) => {
          return value.id !== payload.data.id;
        });
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.recipes = [];
        draft.expense = [];
        draft.total = 0;
        break;
      }
      default:
    }
  });
}
