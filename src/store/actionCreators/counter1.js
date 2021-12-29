/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 14:09:32
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-29 14:11:24
 */

import * as actionTypes from '../action-types';
function add1() {
    return { type: actionTypes.ADD1 };
}
function minus1() {  
    return { type: actionTypes.MINUS1 }
}
const actionCreators = { add1, minus1 };
export default actionCreators;