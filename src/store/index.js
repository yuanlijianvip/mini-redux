/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 10:19:50
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-29 14:08:35
 */

import * as actionTypes from './action-types';
import { createStore } from '../redux';

/**
 * @Author: yuanlijian
 * @description: 
 * @param {*} state 老状态
 * @param {*} action 动作，必须有一个type属性
 * @return {*}
 */
function reducer(state = { number: 0 }, action) {
    switch (action.type) {
        case actionTypes.ADD1:
            return { number: state.number + 1 };
        case actionTypes.MINUS1:
            return { number: state.number - 1 };
        default: 
            return state;
    }
}

let store = createStore(reducer);
window.store = store;
export default store;