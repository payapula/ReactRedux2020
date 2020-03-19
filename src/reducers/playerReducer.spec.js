import {ADD_PLAYER , REMOVE_PLAYER, ADD_SCORE} from '../actions/ActionTypes'
import playerReducer from './playerReducer'

describe('Player Reducer', () => {
    it('initial State Test', () => {
        expect(playerReducer(undefined, {})).toEqual([]);
    })
    it('Add Player', () => {
        const state= [];
        const action = {
            type:ADD_PLAYER,
            payload: "Virat Kohli"
        };
        const nextState = [{ id: 1, name: action.payload}];
        expect(playerReducer(state, action)).toEqual(nextState);
    });
    it('Add 2nd Player', () => {
        const state= [{ id: 1, name: "Virat Kohli"}];
        const action = {
            type:ADD_PLAYER,
            payload: "Sachin"
        };
        const nextState = [{ id: 1, name: "Virat Kohli"}, { id: 2, name: action.payload}];
        expect(playerReducer(state, action)).toEqual(nextState);
    });
    it('Remove a Player', () => {
        const state= [{ id: 1, name: "Virat Kohli"}, { id: 2, name: "Sachin"}];
        const action = {
            type:REMOVE_PLAYER,
            payload: 1
        };
        const nextState = [{ id: 2, name: "Sachin"}];
        expect(playerReducer(state, action)).toEqual(nextState);
    });
    it('Remove last Player', () => {
        const state= [{ id: 2, name: "Sachin"}];
        const action = {
            type:REMOVE_PLAYER,
            payload: 2
        };
        const nextState = [];
        expect(playerReducer(state, action)).toEqual(nextState);
    });
    it('Add Score', () => {
        const state=  [
            {
                id: 1,
                name: "Virat",
                format: [
                    {
                       type: "ODI",
                       score: 200,
                       wickets: 2
                    },
                    {
                       type: "T20",
                       score: 300,
                       wickets: 2
                    },
                    {
                       type: "TEST",
                       score: 400,
                       wickets: 3
                    }
                ]
            },
            {
                id: 2,
                name: "Sachin",
                format: [
                    {
                       type: "ODI",
                       score: 2050,
                       wickets: 52
                    },
                    {
                       type: "T20",
                       score: 3040,
                       wickets: 12
                    },
                    {
                       type: "TEST",
                       score: 4050,
                       wickets: 32
                    }
                ]
            }];
        const nextState = [
            {
                id: 1,
                name: "Virat",
                format: [
                    {
                       type: "ODI",
                       score: 200,
                       wickets: 2
                    },
                    {
                       type: "T20",
                       score: 500,
                       wickets: 2
                    },
                    {
                       type: "TEST",
                       score: 400,
                       wickets: 3
                    }
                ]
            },
            {
                id: 2,
                name: "Sachin",
                format: [
                    {
                       type: "ODI",
                       score: 2050,
                       wickets: 52
                    },
                    {
                       type: "T20",
                       score: 3040,
                       wickets: 12
                    },
                    {
                       type: "TEST",
                       score: 4050,
                       wickets: 32
                    }
                ]
            }];
            const action = {
                type:ADD_SCORE,
                payload: {id: 1, format: "T20", score: 200}
            };
        expect(playerReducer(state, action)).toEqual(nextState);
    });
    it('Add Another Score', () => {
        const state=  [
            {
                id: 1,
                name: "Virat",
                format: [
                    {
                       type: "ODI",
                       score: 200,
                       wickets: 2
                    },
                    {
                       type: "T20",
                       score: 300,
                       wickets: 2
                    },
                    {
                       type: "TEST",
                       score: 400,
                       wickets: 3
                    }
                ]
            },
            {
                id: 2,
                name: "Sachin",
                format: [
                    {
                       type: "ODI",
                       score: 2050,
                       wickets: 52
                    },
                    {
                       type: "T20",
                       score: 3040,
                       wickets: 12
                    },
                    {
                       type: "TEST",
                       score: 4050,
                       wickets: 32
                    }
                ]
            }];
        const action = {
            type:ADD_SCORE,
            payload: {id: 2, format: "ODI", score: 200}
        };
        const nextState = [
            {
                id: 1,
                name: "Virat",
                format: [
                    {
                       type: "ODI",
                       score: 200,
                       wickets: 2
                    },
                    {
                       type: "T20",
                       score: 300,
                       wickets: 2
                    },
                    {
                       type: "TEST",
                       score: 400,
                       wickets: 3
                    }
                ]
            },
            {
                id: 2,
                name: "Sachin",
                format: [
                    {
                       type: "ODI",
                       score: 2250,
                       wickets: 52
                    },
                    {
                       type: "T20",
                       score: 3040,
                       wickets: 12
                    },
                    {
                       type: "TEST",
                       score: 4050,
                       wickets: 32
                    }
                ]
            }];
        expect(playerReducer(state, action)).toEqual(nextState);
    });
    // it('Remove a Player at index 2', () => {
    //     const state= ["Virat Kohli", "Sachin", "Rohit"];
    //     const action = {
    //         type:REMOVE_PLAYER,
    //         payload: 2
    //     };
    //     const nextState = ["Virat Kohli", "Sachin"];
    //     expect(playerReducer(state, action)).toEqual(nextState);
    // });
});