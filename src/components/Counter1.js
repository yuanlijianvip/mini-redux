/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 10:18:48
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-31 10:06:35
 */

import React from 'react';
import actionCreators from '../store/actionCreators/counter1';
import { connect } from '../react-redux';
class ClassCounter1 extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add1}>+</button>
        <button onClick={this.props.minus1}>-</button>
      </div>
    )
  }
}
//把仓库中的状态映射为此组件的属性对象
const mapStateToProps = (state) => state.counter1;
export default connect(mapStateToProps, actionCreators)(ClassCounter1);

// function Counter1() {
  
//     return (
//         <div>
//             <p>{state.number}</p>
//             <button onClick={boundActions.add1}>+</button>
//             <button onClick={boundActions.minus1}>-</button>
//         </div>
//     )
// }

// export default Counter1;

/**
 * 组件和仓库有两种关系
 * 一种输入 组件可以从仓库中读取状态数据进行渲染和显示
 * 一种叫输出 可以在组件派发动作，修改仓库中的状态
 */