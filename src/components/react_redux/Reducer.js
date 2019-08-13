import * as ActionTypes from './ActionTypes';

export default (state={
    'First':0,
    'Second':10,
    'Third':30},action)=>{

    const {counterCaption} = action;

    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {...state,[counterCaption]:state[counterCaption]+1};
        case ActionTypes.DECREMENT:
            return {...state,[counterCaption]:state[counterCaption]-1};
        default:
            return state
    }
}

