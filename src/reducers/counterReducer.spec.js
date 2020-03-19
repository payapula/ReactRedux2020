import counterReducer from './counterReducer';
import {ADD_VALUE , MINUS_VALUE} from '../actions/ActionTypes'


describe('Counter Reducer', () => {
    it('initial State Test', () => {
        expect(counterReducer(undefined, {})).toEqual(0);
    })
    it('Test Add', () => {
        const state= 0;
        const action = {
            type:ADD_VALUE
        };
        expect(counterReducer(state, action)).toEqual(1);
    });
});

