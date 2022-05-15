const defaultState = {
    spin: false
}

const SPIN_STATUS = "SPIN_STATUS"

export const spinReducer= (state = defaultState, action) => {
    switch (action.type) {
        case SPIN_STATUS:
            return state
        default:
            return state
    }
}

export const spinStatus = (payload) => ({type: SPIN_STATUS, payload})