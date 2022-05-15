import { applyMiddleware, combineReducers, createStore} from 'redux';
import {stationsReducer} from "./reducers/stationsReducer"
import {spinReducer} from "./reducers/spinReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    spin: spinReducer,
    stations: stationsReducer
        
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))