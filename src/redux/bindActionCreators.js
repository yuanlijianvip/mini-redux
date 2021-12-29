/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 13:59:56
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-29 14:34:28
 */


/**
 * @Author: yuanlijian
 * @description: 绑定actionCreator和store.dispatch,可以实现自动派发
 * @param {*} actionCreators
 * @param {*} dispatch
 * @return {*}
 */
function bindActionCreators(actionCreators, dispatch) {
    const boundActionCreators = {};
    for (const key in actionCreators) {
        const actionCreator = actionCreators[key];
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
}
function bindActionCreator(actionCreator, dispatch) {
    return function (...args) {
        return dispatch(actionCreator(...args));
    }
}
export default bindActionCreators;
