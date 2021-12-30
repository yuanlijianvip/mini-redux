import * as actionTypes from '../action-types';
/**
 * @Author: yuanlijian
 * @description: 
 * @param {*} state 老状态
 * @param {*} action 动作，必须有一个type属性
 * @return {*}
 */
 function counter1(state = { number: 0 }, action) {
  switch (action.type) {
      case actionTypes.ADD1:
          return { number: state.number + 1 };
      case actionTypes.MINUS1:
          return { number: state.number - 1 };
      default: 
          return state;
  }
}

export default counter1;