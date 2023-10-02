import { POST_GEOCERCA } from "./Actions/postGeocerca";
import { GET_GEOCERCAS } from "./Actions/getGeocercas";
import { FILTER_GEOCERCAS } from "./Actions/filterGeocercas";

const initialState = {
geocercas:[],
allGeocercas: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_GEOCERCAS:
      return{
        ...state,
        allGeocercas: action.payload
      }

    case FILTER_GEOCERCAS: 
      let geocercasFiltered = [...state.allGeocercas];
      if(action.payload.geocerca !== "") {
        geocercasFiltered = geocercasFiltered.filter((el) => el.nombreGeocerca === action.payload.geocerca)
      }

      if(action.payload.unidades !== "") {
        geocercasFiltered = geocercasFiltered.filter((el) => el.nombreUnidad === action.payload.unidades)
      }

      if (action.payload.fechas !== "") {
        switch (action.payload.fechas) {
          case "Q1":
            geocercasFiltered = geocercasFiltered.filter((el) => {
              const fecha = new Date(el.timeStamps.entrada);
              return fecha.getMonth() >= 0 && fecha.getMonth() <= 2; // Enero a marzo
            });
            break;
          case "Q2":
            geocercasFiltered = geocercasFiltered.filter((el) => {
              const fecha = new Date(el.timeStamps.entrada);
              return fecha.getMonth() >= 3 && fecha.getMonth() <= 5; // Abril a junio
            });
            break;
          case "Q3":
            geocercasFiltered = geocercasFiltered.filter((el) => {
              const fecha = new Date(el.timeStamps.entrada);
              return fecha.getMonth() >= 6 && fecha.getMonth() <= 8; // Julio a septiembre
            });
            break;
          case "Q4":
            geocercasFiltered = geocercasFiltered.filter((el) => {
              const fecha = new Date(el.timeStamps.entrada);
              return fecha.getMonth() >= 9 && fecha.getMonth() <= 11; // Octubre a diciembre
            });
            break;
          default:
            break;
        }
      }

    return{
      geocercas: geocercasFiltered,
    }

    case POST_GEOCERCA:
      return{
        ...state
      }
    
    default:
      return state;
  }
};
export default reducer;
