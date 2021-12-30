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
import actionCreators from '../store/actionCreators/counter2';

const boundActions = bindActionCreators(actionCreators, store.dispatch);
function Counter2() {
    let [state, setState] = React.useState(store.getState().counter2);
    React.useEffect(() => {
        return store.subscribe(() => {
            setState(store.getState().counter2);
        });
    }, []);
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={boundActions.add2}>+</button>
            <button onClick={boundActions.minus2}>-</button>
        </div>
    )
}

export default Counter2;
