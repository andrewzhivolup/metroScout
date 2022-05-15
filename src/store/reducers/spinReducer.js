const defaultState = {
    status: true
}

const SPIN_STATUS = "SPIN_STATUS"

export const spinReducer= (state = defaultState, action) => {
    switch (action.type) {
        case SPIN_STATUS:
            return {...state, status: action.payload}
        default:
            return state
    }
}

export const changeSpinStatus = (payload) => ({type: SPIN_STATUS, payload})