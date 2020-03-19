export const ADD_VALUE = "IncrementValue";
export const MINUS_VALUE = "DecrementValue";

export const ADD_PLAYER = "NewIncoming";
export const REMOVE_PLAYER = "Retired";

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