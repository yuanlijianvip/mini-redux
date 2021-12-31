/*
 * @Description:
 * @version:
 * @Author: yuanlijian
 * @Date: 2021-12-31 09:31:36
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-31 10:18:36
 */

import React from "react";
import ReactReduxContext from "./ReactReduxContext";
import { bindActionCreators } from "../redux";

/**
 * @Author: yuanlijian
 * @description: 连接组件和仓库
 * @param {*} mapStateToProps 把仓库中的状态变成组件的属性
 * @param {*} mapDispatchToProps 把dispatch方法变成组件的属性
 * @return {*}
 */
function connect(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    return class extends React.Component {
      static contextType = ReactReduxContext;
      constructor(props, context) {
        super(props);
        const store = context.store;
        this.state = mapStateToProps(store.getState());
        this.dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
      }

      componentDidMount () {
        let store = this.context.store;
        this.unsubscribe = store.subscribe(() => {
            this.setState(mapStateToProps(store.getState()));
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <OldComponent
            {...this.props}
            {...this.state}
            {...this.dispatchProps}
          />
        );
      }
    };
  };
}

export default connect;
