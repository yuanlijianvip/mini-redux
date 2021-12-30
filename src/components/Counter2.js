/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 10:18:48
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-29 14:18:10
 */

import React from 'react';
import actionCreators from '../store/actionCreators/counter1';
import { connect } from 'react-redux';
class ClassCounter2 extends React.Components {
  
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
//     let [state, setState] = React.useState(store.getState().counter2);
//     React.useEffect(() => {
//         return store.subscribe(() => {
//             setState(store.getState().counter2);
//         });
//     }, []);
//     return (
//         <div>
//             <p>{state.number}</p>
//             <button onClick={boundActions.add2}>+</button>
//             <button onClick={boundActions.minus2}>-</button>
//         </div>
//     )
// }

// export default Counter2;
