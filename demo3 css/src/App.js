import React, { Component, Fragment } from 'react'
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import './mystyle.css'
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
           list: []
        };
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    render() {
        return <Fragment>
            <TransitionGroup>
                {
                 this.state.list.map((item, index) => {
                     return (
                         <CSSTransition
                                         //in={this.state.show}  此时不用In了
                                         timeout={1000}
                                         classNames= {'fade'}
                                         //DOM隐藏后不占位
                                         unmountOnExit
                                         // 进来动画结束时调用
                                         onEntered={(el) => {el.style.color = 'skyblue'}}
                                         // 第一次显示时就执行动画
                                         appear={true}
                                         key={index}
                                     >
                            <div  >item</div>
                         </CSSTransition>
                     )
                 })
                }
            </TransitionGroup>
            <button onClick={this.handleAddItem}>add</button>
        </Fragment>
    }

    handleAddItem(){
        this.setState((prevState) =>{
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App;