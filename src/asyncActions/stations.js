import { changeSpinStatus } from "../store/reducers/spinReducer";
import { getStations } from "../store/reducers/stationsReducer"

const urljson = "http://localhost:3001/stations/"

export const fetchStations = () => async (dispatch, getStore) => {
    try {
        // fetch(urljson)  //возможные варианты
        // .then(response => response.json())
        // .then(json => dispatch(getStations(json)))

        // const data = await fetch(urljson);
        // const json = await data.json();
        // dispatch(getStations(json))
        dispatch(changeSpinStatus(true))
        const response = await (await fetch(urljson)).json();
        dispatch(getStations(response))

    } catch (error) {

    } finally {
        setTimeout(()=>{
            dispatch(changeSpinStatus(false))}, 1000)
    }


}

