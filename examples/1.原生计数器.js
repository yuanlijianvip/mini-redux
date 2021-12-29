/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 09:11:29
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-29 10:07:32
 */

import { createStore } from './redux';

const counterValue = document.getElementById('counter-value');
const addBtn = document.getElementById('add-btn');
const minusBtn = document.getElementById('minus-btn');

const ADD = 'ADD';
const MINUS = 'MINUS';

/**
 * @Author: yuanlijian
 * @description: 
 * @param {*} state 老状态
 * @param {*} action 动作，必须有一个type属性
 * @return {*}
 */
function reducer(state = { number: 0 }, action) {
    switch (action.type) {
        case ADD:
            return { number: state.number + 1 };
        case MINUS:
            return { number: state.number - 1 };
        default: 
            return state;
    }
}
let store = createStore(reducer);
console.log(store);
function render() {
    counterValue.innerHTML = store.getState().number + '';
}
render();
const unsubscript = store.subscribe(render);
addBtn.addEventListener('click', () => store.dispatch({  type: ADD }))
minusBtn.addEventListener('click', () => store.dispatch({type: MINUS}))

// setTimeout(() => {
//     unsubscript();
// }, 3000)