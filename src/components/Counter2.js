/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-29 10:18:48
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-31 10:06:41
 */

import React from 'react';
import actionCreators from '../store/actionCreators/counter2';
import { connect } from '../react-redux';
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
