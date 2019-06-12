import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionType';

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE){
        //console.log(state, action);
        const newState = JSON.parse(JSON.stringify(state));//进行一次深拷贝（reducer不能修改state！）
        newState.inputValue = action.value;
        return newState;
    }else if (action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        //newState.list = [...state.list, action.value];
        newState.list.push(newState.inputValue);//如此更简单
        newState.inputValue = '';
        return newState;
    }else if (action.type ===  DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    }else if (action.type ===  INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

   // console.log(state, action);
    return state;
}