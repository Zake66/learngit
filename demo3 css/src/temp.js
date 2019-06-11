//
//
// import React, { Component, Fragment } from 'react'
// import { CSSTransition } from 'react-transition-group';
// import './mystyle.css'
// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             show: true
//         };
//         this.handleToggle = this.handleToggle.bind(this);
//     }
//
//     render() {
//         return <Fragment>
//             <CSSTransition
//                 in={this.state.show}
//                 timeout={1000}
//                 classNames= {'fade'}
//                 unmountOnExit
//                 // 进来动画结束时调用
//                 onEntered={(el) => {el.style.color = 'skyblue'}}
//                 // 第一次显示时就执行动画
//                 appear={true}
//             >
//                 <div >hello</div>
//             </CSSTransition>
//
//             <button onClick={this.handleToggle}>toggle</button>
//         </Fragment>
//     }
//
//     handleToggle(){
//         this.setState({
//             // show: this.state.show? false : true
//             show: !this.state.show
//         })
//     }
// }
//
// export default App;