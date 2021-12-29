/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 10:18:48
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-29 14:18:10
 */

import React from 'react';
import store from '../store';
import { bindActionCreators } from '../redux';
import actionCreators from '../store/actionCreators/counter1';

const boundActions = bindActionCreators(actionCreators, store.dispatch);
function Counter1() {
    let [state, setState] = React.useState(store.getState());
    React.useEffect(() => {
        return store.subscribe(() => {
            setState(store.getState());
        });
    }, []);
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={boundActions.add1}>+</button>
            <button onClick={boundActions.minus1}>-</button>
        </div>
    )
}

export default Counter1;

/**
 * 组件和仓库有两种关系
 * 一种输入 组件可以从仓库中读取状态数据进行渲染和显示
 * 一种叫输出 可以在组件派发动作，修改仓库中的状态
 */