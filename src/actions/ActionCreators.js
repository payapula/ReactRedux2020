import { ADD_VALUE, MINUS_VALUE, ADD_PLAYER, REMOVE_PLAYER, ADD_SCORE} from './ActionTypes';

export const addAction = () => ({
    type: ADD_VALUE
})

export const subAction = () => ({
    type: MINUS_VALUE
})

export const addPlayer = (playername) => ({
    type: ADD_PLAYER, 
    payload: playername
})

export const removePlayer = (index) => ({
    type: REMOVE_PLAYER,
    payload: index
})

/**
 * 
 * @param {Player Id} id 
 * @param {ODI, TEST, T20} format 
 * @param {100} score 
 */
export const addScore = (id, format, score) => ({
    type: ADD_SCORE,
    payload: {id, format, score}
})