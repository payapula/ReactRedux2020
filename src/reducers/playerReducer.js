import {ADD_PLAYER , REMOVE_PLAYER, ADD_SCORE} from '../actions/ActionTypes'

/**
 *  State =  [
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
         },
         {
             id: 3,
             name: "Dhoni",
             format: [
                 {
                    type: "ODI",
                    score: 2000,
                    wickets: 2
                 },
                 {
                    type: "T20",
                    score: 3000,
                    wickets: 2
                 },
                 {
                    type: "TEST",
                    score: 4000,
                    wickets: 3
                 }
             ]
         }
    ]
 */

let playerID = 0;
const playerReducer = (state=[], action) => {
   let newState = state.slice(); // To prevent shallow copy
    switch (action.type) {
        case ADD_PLAYER:
            newState.push({id: ++playerID, name: action.payload});
            break; // sdfsdf 
        case REMOVE_PLAYER: //BY ID
            return state.filter((player) => (player.id !== action.payload));
        case ADD_SCORE:
            return state.map(player => {
                if(player.id === action.payload.id){
                    if(player.hasOwnProperty("format") && Array.isArray(player.format)){
                        let newFormatForThisPlayer = player.format.map(format => {
                            if(format.type == action.payload.format)
                            {
                               format.score = format.score + action.payload.score;
                               return format;
                            }else{
                                return format;
                            }
                        })
                       player.format = newFormatForThisPlayer;
                       return player;  
                    }
                }else{
                    return player;
                }
            });
        default:
            break;
    }
    return newState;
}

export default playerReducer;