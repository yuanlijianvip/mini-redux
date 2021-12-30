/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 10:19:50
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-29 14:08:35
 */


import { createStore } from '../redux';
import combinedReducer from './reducers';

let store = createStore(combinedReducer);
window.store = store;
export default store;