import React, { useEffect, useState } from "react";
import style from "./SelectArea.module.css";
import { useDispatch } from "react-redux";
import { getGeocercas } from "../../redux/Actions/getGeocercas";
import { filterGeocercas } from "../../redux/Actions/filterGeocercas";

const SelectsArea = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    geocerca: "",
    unidades: "",
    fechas: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getGeocercas());
        dispatch(filterGeocercas({
          geocerca: "",
          unidades: "",
          fechas: ""
        }));
      } catch (error) {
        console.error("Error al obtener geocercas:", error);
      }
    };
  
    fetchData(); 
  }, [dispatch]); 

  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await dispatch(getGeocercas());
      dispatch(filterGeocercas(filter));
    } catch (error) {
      console.error("Error al obtener geocercas:", error);
    }
  };

  return (
    <div className={style.selectsArea}>
      <div className={style.allSelectors}>
        <div className={style.selectors}>
          <label htmlFor="" className={style.label}>
            Geocerca*
          </label>
          <select name="geocerca" id="" className={style.select} onChange={handleChange}>
            <option value="">Todas</option>
            <option value="Geocerca 1">Monterrey</option>
            <option value="Geocerca 2">Ciudad de México</option>
            <option value="Geocerca 3">Texas</option>
            <option value="">Los Angeles</option>
            <option value="">Laredo</option>
          </select>
        </div>

        <div className={style.selectors}>
          <label htmlFor="" className={style.label}>
            Unidades*
          </label>
          <select name="unidades" id="" className={style.select} onChange={handleChange}>
            <option value="">Todas</option>
            <option value="Unidad 1">Base 1525</option>
            <option value="Unidad 2">Base 1458</option>
            <option value="Unidad 3">Base 1258</option>
          </select>
        </div>

        <div className={style.selectors}>
          <label htmlFor="" className={style.label}>
            Rangos de fechas*
          </label>
          <select name="fechas" id="" className={style.select} onChange={handleChange}>
            <option value="">Todos</option>
            <option value="Q1">Q1</option>
            <option value="Q2">Q2</option>
            <option value="Q3">Q3</option>
            <option value="Q4">Q4</option>
          </select>
        </div>
      </div>

      <div>
        <button className={style.btn} onClick={handleSubmit}>
          Generar Reporte
        </button>
      </div>
    </div>
  );
};

export default SelectsArea;
