

export const personaInitialState = {
    count: 0
}

export const personaReducer = (state, action) => {
    switch (action.type) {
        case 'setCount':
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}