import { createActions } from "redux-actions";

import { createRequestAction, getResponseError } from "../common/helpers";
import { ENDPOINTS, ACTION_TYPES } from "./constants";

const actionCreators = createActions({
  ...createRequestAction(ACTION_TYPES.GET_ISCOOL_LIST),
  ...createRequestAction(ACTION_TYPES.GET_MK_LIST),
  ...createRequestAction(ACTION_TYPES.GET_ABOUT_US_LIST),
  ...createRequestAction(ACTION_TYPES.GET_COURSES_LIST),
  ...createRequestAction(ACTION_TYPES.GET_WHYGT_LIST),
  ...createRequestAction(ACTION_TYPES.GET_GALERY_LIST),
  ...createRequestAction(ACTION_TYPES.GET_ALL_REWIEWS_LIST),
});

export function getIsCool() {
  return async (dispatch, getState, { api }) => {
    dispatch(actionCreators.getIscoolListRequest());
    try {
      const { data } = await api.get(`${ENDPOINTS.ISCOOL_LIST}`);
      dispatch(actionCreators.getIscoolListSuccess(data));
      return data;
    } catch (e) {
      const error = getResponseError(e);
      dispatch(actionCreators.getIscoolListFail(error));
      return Promise.reject(error);
    }
  };
}

export function getMk() {
  return async (dispatch, getState, { api }) => {
    dispatch(actionCreators.getMkRequest());
    try {
      const { data } = await api.get(`${ENDPOINTS.MK_LIST}`);

      dispatch(actionCreators.getMkSuccess(data));
      return data;
    } catch (e) {
      const error = getResponseError(e);
      dispatch(actionCreators.getMkFail(error));
      return Promise.reject(error);
    }
  };
}

export function getAboutUs() {
  return async (dispatch, getState, { api }) => {
    dispatch(actionCreators.getAboutUsRequest());
    try {
      const { data } = await api.get(`${ENDPOINTS.MK_LIST}`);

      dispatch(actionCreators.getAboutUsSuccess(data));
      return data;
    } catch (e) {
      const error = getResponseError(e);
      dispatch(actionCreators.getAboutUsFail(error));
      return Promise.reject(error);
    }
  };
}
export function getCourses() {
  return async (dispatch, getState, { api }) => {
    dispatch(actionCreators.getCoursesRequest());
    try {
      const { data } = await api.get(`${ENDPOINTS.MK_LIST}`);

      dispatch(actionCreators.getCoursesSuccess(data));
      return data;
    } catch (e) {
      const error = getResponseError(e);
      dispatch(actionCreators.getCoursesFail(error));
      return Promise.reject(error);
    }
  };
}
export function getWhyGt() {
  return async (dispatch, getState, { api }) => {
    dispatch(actionCreators.getWhyGtRequest());
    try {
      const { data } = await api.get(`${ENDPOINTS.WHYGT_LIST}`);

      dispatch(actionCreators.getWhyGtSuccess(data));
      return data;
    } catch (e) {
      const error = getResponseError(e);
      dispatch(actionCreators.getWhyGtFail(error));
      return Promise.reject(error);
    }
  };
}

export function getGalery() {
  return async (dispatch, getState, { api }) => {
    dispatch(actionCreators.getGaleryRequest());
    try {
      const { data } = await api.get(`${ENDPOINTS.GALERY_LIST}`);

      dispatch(actionCreators.getGalerySuccess(data));
      return data;
    } catch (e) {
      const error = getResponseError(e);
      dispatch(actionCreators.getGaleryFail(error));
      return Promise.reject(error);
    }
  };
}

export function getAllRewiews() {
  return async (dispatch, getState, { api }) => {
    dispatch(actionCreators.getAllRewiewsRequest());
    try {
      const { data } = await api.get(`${ENDPOINTS.ALL_REWIEWS_LIST}`);

      dispatch(actionCreators.getAllRewiewsSuccess(data));
      return data;
    } catch (e) {
      const error = getResponseError(e);
      dispatch(actionCreators.getAllRewiewsFail(error));
      return Promise.reject(error);
    }
  };
}

export const actions = {
  ...actionCreators,
  getIsCool,
  getMk,
  getAboutUs,
  getCourses,
  getWhyGt,
  getGalery,
  getAllRewiews,
};

// console.log(actions);
