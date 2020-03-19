import {ADD_VALUE , MINUS_VALUE} from '../actions'


const counterReducer = (state=0, action) => {
   let newState = state;
    switch (action.type) {
        case ADD_VALUE:
            newState = state +1; 
            break;
        case MINUS_VALUE:
            newState = state -1; 
            break;
        default:
            break;
    }
    return newState;
}

export default counterReducer;