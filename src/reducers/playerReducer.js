import {ADD_PLAYER , REMOVE_PLAYER} from '../actions'


const playerReducer = (state=[], action) => {
   let newState = state.slice(); // To prevent shallow copy
    switch (action.type) {
        case ADD_PLAYER:
            newState.push(action.payload);
            break;
        case REMOVE_PLAYER:
            newState.splice(action.payload, 1);
            break;
        default:
            break;
    }
    return newState;
}

export default playerReducer;