const defaultState = {
    stations: []
}

const FETCH_STATIONS = "FETCH_STATIONS"

export const stationsReducer= (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_STATIONS:
            return {...state,  stations:[...action.payload] }
        default:
            return state
    }
}

export const getStations = (payload) => ({type: FETCH_STATIONS, payload})