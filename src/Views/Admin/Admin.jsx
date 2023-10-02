import style from "./Admin.module.css";
import { useState } from "react";
import Geocercas from "../../Components/Geocercas/Geocercas";
import Vacio from "../../Components/Vacio/Vacio";


const Admin = () => {

  const [actualWindow, setActualWindow] = useState("geocercas");

  const handleChange= (event, data) => {
    event.preventDefault();
    setActualWindow(data);
  };

  return (
    <div className={style.gridContainer}>
      <div className={style.sideBar}>
        <div className={style.windowSelector}>
          <div className={style.menu}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#66cc00" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
            <p>MENÚ</p>

          </div>
          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event, "dashboard")}
            disabled={actualWindow === "dashboard"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-bar" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M4 20l14 0" />
            </svg> Dashboard
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"historial")}
            disabled={actualWindow === "historial"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-report" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M17 13v4h4" />
              <path d="M12 3v4a1 1 0 0 0 1 1h4" />
              <path d="M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" />
            </svg> Historial
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"telemetria")}
            disabled={actualWindow === "telemetria"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-spreadsheet" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M8 11h8v7h-8z" />
              <path d="M8 15h8" />
              <path d="M11 11v7" />
            </svg> Informe de telemetría
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"velocidad")}
            disabled={actualWindow === "velocidad"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-speedtest" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
              <path d="M16 9l-4 4" />
            </svg> Informe de velocidad
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"geocercas")}
            disabled={actualWindow === "geocercas"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vector-triangle" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M3 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M17 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M6.5 17.1l5 -9.1" />
              <path d="M17.5 17.1l-5 -9.1" />
              <path d="M7 19l10 0" />
            </svg> Informe de geocercas
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"temperatura")}
            disabled={actualWindow === "temperatura"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-temperature-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <path d="M8 9l4 0" />
              <path d="M16 9l6 0" />
              <path d="M19 6l0 6" />
            </svg> Informe de temperatura
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"conducción")}
            disabled={actualWindow === "conducción"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg> Informe de conducción
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"kilometraje")}
            disabled={actualWindow === "kilometraje"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-3" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.875 8c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z" />
              <path d="M9 8v2" />
              <path d="M6 8v3" />
              <path d="M12 8v3" />
              <path d="M18 8v3" />
              <path d="M15 8v2" />
            </svg> Informe de kilometraje
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"combustible")}
            disabled={actualWindow === "combustible"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gas-station" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
              <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
              <path d="M3 20l12 0" />
              <path d="M18 7v1a1 1 0 0 0 1 1h1" />
              <path d="M4 11l10 0" />
            </svg> Informe de combustible
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"reversa")}
            disabled={actualWindow === "reversa"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999"
              fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 14l-4 -4l4 -4" />
              <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg> Informe de reversa
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"remolque")}
            disabled={actualWindow === "remolque"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tir" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5" />
              <path d="M12 18v-13h3" />
              <path d="M3 17l0 -5l9 0" />
            </svg> Informe de remolque
          </button>

          <button
            className={style.windowButtton}
            onClick={(event) => handleChange(event,"viajes")}
            disabled={actualWindow === "viajes"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pins" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#999999" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
              <path d="M8 7l0 .01" />
              <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
              <path d="M16 15l0 .01" />
            </svg> Informe de viajes
          </button>

        </div>

      </div>
      <div className={style.adminWindow}>
        {(() => {
          switch (actualWindow) {

            case "geocercas":
              return <Geocercas />;

            case "dashboard":
              return <Vacio />;

            case "historial":
              return <Vacio />;

            case "telemetria":
              return <Vacio />;

            case "velocidad":
              return <Vacio />;

            case "temperatura":
              return <Vacio />;

            case "conducción":
              return <Vacio />;

            case "kilometraje":
              return <Vacio />;

            case "combustible":
              return <Vacio />;

            case "reversa":
              return <Vacio />;

            case "remolque":
              return <Vacio />;

            case "viajes":
              return <Vacio />;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
};

export default Admin;
