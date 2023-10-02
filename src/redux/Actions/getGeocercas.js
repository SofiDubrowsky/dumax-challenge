import axios from "axios";
export const GET_GEOCERCAS = "GET_GEOCERCAS";


export const getGeocercas= () => {
  return async (dispatch) => {
      
       const {data} = await axios.get('https://us-central1-dumax-eld.cloudfunctions.net/userApp/api/test/geocercas?geocerca&unidades&fechas');
       const sortedGeocercas = data.sort((a, b) => {
        const dateA = new Date(a.timeStamps.entrada);
        const dateB = new Date(b.timeStamps.entrada);
        return dateB - dateA;
      });
        return dispatch({ type: GET_GEOCERCAS, payload: sortedGeocercas});
    }
};