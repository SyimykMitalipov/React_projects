import { handleActions } from "redux-actions";

/**
 * Handle actions that will return a boolean value
 * @param {Function[]} truthyActions
 * @param {Function[]} falsyActions
 * @param {Boolean=false} initialState
 * @return {*}
 */
export const boolReducer = (
  truthyActions,
  falsyActions,
  initialState = false
) =>
  handleActions(
    {
      [truthyActions]: () => true,
      [falsyActions]: () => false,
    },
    initialState
  );

const defaultSuffixes = ["REQUEST", "SUCCESS", "FAIL"];

/**
 * Creates an object with an action types as keys, enhanced with suffixes. Default suffixes are 'REQUEST', 'SUCCESS', 'FAILURE'.
 * @param {String} type Action type in upper snake case
 * @param {Function[]} payloadFormatters Array of formatters. Order: pending, success, failure
 * @param {String[]} suffixes Array of suffixes that will append to type
 * @return {string|{[p: string]: *}}
 */
export function createRequestAction(
  type,
  payloadFormatters = [],
  suffixes = defaultSuffixes
) {
  if (!type || typeof type !== "string") {
    throw new Error("type argument is required");
  }
  const hasFormatters = payloadFormatters && payloadFormatters.length > 0;

  return suffixes.reduce(
    (acc, suffix, idx) => ({
      ...acc,
      [`${type}_${suffix}`]: hasFormatters ? payloadFormatters[idx] : undefined,
    }),
    {}
  );
}

/**
 *
 * @param {*} e Error object. Might be an Error instance or plain object
 * @returns {string} A string
 */
export function getResponseError(e = {}) {
  const { response } = e;

  return response ? response.data || response.statusText : "network error";
}

/**
 * @param {String} key Key to set/get something to localStorage
 * @param {Any} item Value to set/get to localStorage
 */
export const setLocal = (key, item) =>
  localStorage ? localStorage.setItem(key, JSON.stringify(item)) : null;
export const getLocal = (key) =>
  localStorage ? JSON.parse(localStorage.getItem(key) || null) : null;
export const delLocal = (key) =>
  localStorage ? localStorage.removeItem(key) : null;

/**
 * Returns object key = el.id value = index
 * @param {Array} arr
 * @returns {Object}
 */
export const idMapping = (arr) =>
  arr.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});

/**
 *
 * @param {Array} arr
 * @return {Object} tree
 */
export const makeTree = (arr, defaultParentId) => {
  const tree = {};

  const arrMap = idMapping(arr);

  arr.forEach((el) => {
    if (el.parent === null || el.parent === defaultParentId) {
      tree[el.id] = el;
      return;
    }
    const parentEl = arr[arrMap[el.parent]];
    parentEl.children = [...(parentEl.children || []), el];
  });

  return tree;
};

/**
 *
 * @param {File} file
 * @return {Blob} compressed blob File
 */

export function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
