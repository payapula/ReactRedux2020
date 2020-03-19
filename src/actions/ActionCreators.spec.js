import * as actions from './ActionCreators'
import { ADD_VALUE, MINUS_VALUE, ADD_PLAYER, REMOVE_PLAYER, ADD_SCORE} from './ActionTypes';

describe('Counters', () => {
        it('Return Incremented value', () => {
            expect(actions.addAction()).toEqual({
                type: ADD_VALUE
            })
        });
        it('Return Decremented value', () => {
            expect(actions.subAction()).toEqual({
                type: MINUS_VALUE
            })
        });
});

describe('Players', () => {
    it('Add new player', () => {
        const playername = "Mustafa";
        expect(actions.addPlayer(playername)).toEqual({
            type: ADD_PLAYER, 
            payload: playername
        })
    });
    it('Remove a player', () => {
        const index = 2;
        expect(actions.removePlayer(index)).toEqual({
            type: REMOVE_PLAYER,
            payload: index
        })
    });
    it('Add Score', () => {
        const id = 1;
        const format = "T20";
        const score = 200;
        expect(actions.addScore(id, format)).toEqual({
            type: ADD_SCORE,
            payload: {id : 1, format: "T20", score:200}
        })
    });
});