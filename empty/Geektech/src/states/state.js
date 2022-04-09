import { combineReducers } from "redux";
import { handleActions, combineActions } from "redux-actions";
import { boolReducer } from "../common/helpers";
import { actions } from "./actions";

export const initialState = {
  isCool: null,
  error: null,
};

const isLoading = boolReducer(
  [combineActions(actions.getIscoolListRequest)],
  [combineActions(actions.getIscoolListSuccess, actions.getIscoolListFail)]
);

const data = handleActions(
  {
    [actions.getIscoolListSuccess]: (state, { payload }) => ({
      ...state,
      isCool: payload,
    }),
    [actions.getIscoolListFail]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [actions.getMkListSuccess]: (state, { payload }) => ({
      ...state,
      isCool: payload,
    }),
    [actions.getMkListFail]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [actions.getAboutUsListSuccess]: (state, { payload }) => ({
      ...state,
      isCool: payload,
    }),
    [actions.getAboutUsListFail]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [actions.getCoursesListSuccess]: (state, { payload }) => ({
      ...state,
      isCool: payload,
    }),
    [actions.getCoursesListFail]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [actions.getWhyGtListSuccess]: (state, { payload }) => ({
      ...state,
      isCool: payload,
    }),
    [actions.getWhyGtListFail]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [actions.getGaleryListSuccess]: (state, { payload }) => ({
      ...state,
      isCool: payload,
    }),
    [actions.getGaleryListFail]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [actions.getAllRewiewsListSuccess]: (state, { payload }) => ({
      ...state,
      isCool: payload,
    }),
    [actions.getAllRewiewsListFail]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState
);

export const reducer = combineReducers({
  data,
  isLoading,
});
