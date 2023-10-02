import style from "./Geocercas.module.css";
import { useState} from "react";
import SelectsArea from "../SelectArea/SelectArea";
import Form from "../Form/Form";
import { useSelector } from "react-redux";


const Geocercas = () => {

  const geocercas = useSelector(state => state.geocercas)

  function calcularDuracion(entradaTimestamp, salidaTimestamp) {
    const fechaEntrada = new Date(entradaTimestamp);
    const fechaSalida = new Date(salidaTimestamp);

    const diferenciaEnMilisegundos = fechaSalida - fechaEntrada;

    const segundos = Math.floor(diferenciaEnMilisegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);

    const segundosRestantes = segundos % 60;
    const minutosRestantes = minutos % 60;

    const duracionFormateada = `${horas}:${minutosRestantes}:${segundosRestantes}`;

    return duracionFormateada;
  }

  const [elementsPerPage, setElementsPerPage] = useState(10)
  const total = Math.ceil(geocercas?.length / elementsPerPage); 
  const [current, setCurrent] = useState(1); 

  const handleChange = (event) => {
    setElementsPerPage(Number(event.target.value));
  };

  const previousPage = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  const nextPage = () => {  
    if (current < total) {
      setCurrent(current + 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= total) {
      setCurrent(page);
    }
  };

  const start = (current - 1) * elementsPerPage;
  const final = current * elementsPerPage;
  const elementsOnPage = geocercas.slice(start, final); 
  const resultStart = Math.min((current - 1) * elementsPerPage + 1, geocercas.length);
  const resultFinal = Math.min(current * elementsPerPage, geocercas.length);


  return (
    <div className={style.main}>
      <h2>Informe de geocercas</h2>

      <SelectsArea />

      <div className={style.tables}>

        <Form></Form>

        <div className={style.content}>

          <div className={style.tableTop}>
            <div>
              <button className={style.blueButton}>CSV</button>
              <button className={style.blueButton}>Excel</button>
              <button className={style.blueButton}>PDF</button>
            </div>

            <div style={{ marginRight: "10vh" }}>
              Mostrar <select name="" id="" style={{ backgroundColor: "#ececec", borderRadius: ".5vh", padding: "0.5vh", width: "3.5vw", paddingLeft: "1vh", paddingRight: "1vh", border: "solid 1px #cacaca", fontSize: "1.5vh" }} onChange={handleChange}>
                <option value= "10">10</option>
                <option value= "23">25</option>
                <option value= "50">50</option>
                <option value= "1">1</option>
              </select> Entradas
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="input" style={{ fontSize: "1.5vh", boxShadow: "none" }}>Buscar</label>
              <input type="text" id="input" style={{ border: "solid 1px #cacaca", borderRadius: ".5vh", backgroundColor: "#ececec", fontSize: "1.5vh", padding: "0.5vh", marginBottom: "2.2vh" }} />
            </div>

          </div>

          <div className={style.table}>
            <table class=" w-full  text-left text-black border border-dark-grey rounded-lg" >
              <thead class=" text-white text-base uppercase  bg-black ">
                <tr>
                  <th scope="col" class="px-6 py-3 " style={{ textTransform: "none", fontWeight: "normal" }}>
                    Nombre de la unidad
                  </th>
                  <th scope="col" class="px-6 py-3" style={{ textTransform: "none", fontWeight: "normal" }}>
                    Geocerca
                  </th>
                  <th scope="col" class="px-6 py-3" style={{ textTransform: "none", fontWeight: "normal" }}>
                    Tipo de Geocerca
                  </th>
                  <th scope="col" class="px-6 py-3" style={{ textTransform: "none", fontWeight: "normal" }}>
                    Fecha de entrada
                  </th>
                  <th scope="col" class="px-6 py-3" style={{ textTransform: "none", fontWeight: "normal" }}>
                    Fecha de salida
                  </th>
                  <th scope="col" class="px-6 py-3" style={{ textTransform: "none", fontWeight: "normal" }}>
                    Duración
                  </th>
                </tr>
              </thead>
              {Array.isArray(geocercas) &&
                elementsOnPage?.map((geo, index) => {
                  return (
                    <tbody key={index} className={index % 2 === 0 ? 'bg-dark-grey' : 'bg-light-grey'}>
                      <tr className="border-b">
                        <td className="px-6 py-4">{geo?.nombreUnidad}</td>
                        <td className="px-6 py-4">{geo?.nombreGeocerca}</td>
                        <td className="px-6 py-4">{geo?.tipoDeGeocerca}</td>
                        <td className="px-6 py-4">{geo?.timeStamps?.entrada}</td>
                        <td className="px-6 py-4">{geo?.timeStamps?.salida}</td>
                        <td className="px-6 py-4">{calcularDuracion(geo?.timeStamps?.entrada, geo?.timeStamps?.salida)}</td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>

            {geocercas.length < 1 && 
            <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"20vh"}}>
              <p style={{fontSize: "2vh"}}>No se encontraron resultados</p>
              </div> }

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "3vh", paddingBottom: "2vh" }}>

              <div style={{ fontSize: "1.2vh", fontWeight: "bold" }}>
                <p>{`Mostrando ${resultStart} a ${resultFinal} de ${geocercas?.length} resultados`}</p>
              </div>

              <div>
                <button onClick={previousPage} disabled={current === 1} className={style.btnPag}>
                  Anterior
                </button>
                {Array.from({ length: total }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={current === index + 1 ? style.btnNumSel : style.btnNum}
                  >
                    {index + 1}
                  </button>
                ))}
                {total > 4 ? (<button onClick={() => { setCurrent(total) }}>{`...${total}`}</button>) : null}
                <button onClick={nextPage} disabled={current === total} className={style.btnPag}>
                  Siguiente
                </button>
              </div>

            </div>




          </div>
        </div>
      </div>

    </div>
  );
};

export default Geocercas;
