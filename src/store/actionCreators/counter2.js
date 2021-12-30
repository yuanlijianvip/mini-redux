/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 14:09:32
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-29 14:11:24
 */

import * as actionTypes from '../action-types';
function add2() {
    return { type: actionTypes.ADD2 };
}
function minus2() {  
    return { type: actionTypes.MINUS2 }
}
const actionCreators = { add2, minus2 };
export default actionCreators;