import axios from 'axios'
export const POST_GEOCERCA = "POST_GEOCERCA";

export const postGeocerca = (payload) => {
    return async (dispatch) => {

        let info = await axios.post("https://us-central1-dumax-eld.cloudfunctions.net/userApp/api/test/geocercas",payload);

        return dispatch({ type: POST_GEOCERCA, payload: info.data });
    }
}