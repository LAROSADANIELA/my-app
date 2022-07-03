import React from "react";
import "./Cover.css";
import Proyectos from "../proyectos/Proyectos";
import Agenda from "../agenda/Agenda";

export const Cover = () => {
  return (
    <div className="cover-container">
      <h1>ORGANIZACION LABORAL</h1>
      <h2>mensaje programado</h2>

      <button id="proyectos" onClick={Proyectos}>
        PROYECTOS
      </button>
      <button id="agenda" onClick={Agenda}>
        AGENDA
      </button>
    </div>
  );
};
export default Cover;
