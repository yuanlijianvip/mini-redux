/*
 * @Description:
 * @version:
 * @Author: yuanlijian
 * @Date: 2021-12-29 09:11:29
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-31 10:01:25
 */

import React from "react";
import ReactDom from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import store from "./store";
import { Provider } from "./react-redux";
ReactDom.render(
  <Provider store={store}>
    <Counter1 />
    <Counter2 />
  </Provider>,
  document.getElementById("root")
);
