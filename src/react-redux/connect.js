/*
 * @Description:
 * @version:
 * @Author: yuanlijian
 * @Date: 2021-12-31 09:31:36
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-31 12:28:03
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
        return function (props) {
            const { store } = React.useContext(ReactReduxContext);
            const { getState, dispatch, subscribe } = store;
            const prevState = getState();
            const stateProps = React.useMemo(() => mapStateToProps(prevState), [prevState]);
            const dispatchProps = React.useMemo(() => {
                //mapDispatchToProps有多种写法，常见有三种
                if (typeof mapDispatchToProps === 'function') {
                    return mapDispatchToProps(dispatch);
                } else if (typeof mapDispatchToProps === 'object' && mapDispatchToProps !== null) {
                    return bindActionCreators(mapDispatchToProps, dispatch);
                } else { // null undefined
                    return { dispatch };
                }
            }, [store.dispatch]);
            const [,forceUpdate] = React.useReducer(x => x + 1, 0);
            React.useLayoutEffect(() => {
                return subscribe(forceUpdate);
            }, [subscribe]);
            return <OldComponent {...props} {...stateProps} {...dispatchProps}/>
        }
    }
}

export default connect;
