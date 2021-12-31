/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 10:18:48
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-31 11:31:16
 */

import React from 'react';
import actionCreators from '../store/actionCreators/counter2';
import { connect, useSelector, useDispatch } from '../react-redux';
class ClassCounter2 extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add2}>+</button>
        <button onClick={this.props.minus2}>-</button>
      </div>
    )
  }
}
//把仓库中的状态映射为此组件的属性对象
const mapStateToProps = (state) => state.counter2;
export default connect(mapStateToProps, actionCreators)(ClassCounter2);

// function Counter2() {
//   let state = useSelector((state) => state.counter2);
//   let dispatch = useDispatch();
//   return (
//       <div>
//           <p>{state.number}</p>
//           <button onClick={() => dispatch(actionCreators.add2())}>+</button>
//           <button onClick={() => dispatch(actionCreators.minus2())}>-</button>
//       </div>
//   )
// }

// export default Counter2;
