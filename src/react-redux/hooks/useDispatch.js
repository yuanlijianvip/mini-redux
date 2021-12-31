/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-31 10:30:41
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-31 11:00:31
 */
import React from 'react';
import ReactReduxContext from "../ReactReduxContext";

const useDispatch = () => {
    const { store } = React.useContext(ReactReduxContext);
    return store.dispatch;
}
export default useDispatch;