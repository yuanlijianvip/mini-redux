/*
 * @Description:
 * @version:
 * @Author: yuanlijian
 * @Date: 2021-12-31 10:30:32
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-31 11:58:01
 */
import React from "react";
import ReactReduxContext from "../ReactReduxContext";

const useSelector = (selector, equalityFn = shallowEqual) => {
  const { store } = React.useContext(ReactReduxContext);
  let state = store.getState();
  let lastSelectedState = React.useRef(null);
  let selectedState = selector(state);
  let [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  React.useLayoutEffect(() => {
    //在此监听仓库中状态的变化事件，仓库中状态变化后执行回调函数
    return store.subscribe(() => {
    //获取新的状态
      let selectedState = selector(store.getState());
      //对比新的状态是否相同
      if (!equalityFn(selectedState, lastSelectedState.current)) {
        console.log(11111);
        forceUpdate();
        lastSelectedState.current = selectedState;
      }
    });
  });
  return selectedState;
};

export function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    typeof obj1 != "object" ||
    obj1 === null ||
    typeof obj2 != "object" ||
    obj2 === null
  ) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

export default useSelector;
