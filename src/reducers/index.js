import counterReducer from '../reducers/counterReducer';
import playerReducer from './playerReducer';
import {combineReducers} from 'redux';


let rootReducer = combineReducers({
    counter: counterReducer,
    player : playerReducer
});

export default rootReducer;