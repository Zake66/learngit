import React, {Component} from 'react';
import PropTypes from 'prop-types';

class toDoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);//尽量在构造函数中使用bind
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.content !== this.props.content){
            return true;
        } else {
            return false;
        }
    }

    render() {
        console.log('child render');
        const {content} = this.props;
        return (
            <li onClick={this.handleClick}>
                {content}
            </li>
        );
    }

    handleClick(){
        // this.props.deletItem(this.props.index);

        const {deletItem , index} = this.props;//改写成此种形式
        deletItem(index);
    }
}

toDoItem.propTypes = {
    content: PropTypes.string,
    deletItem: PropTypes.func,
    index: PropTypes.number
};

export default toDoItem;