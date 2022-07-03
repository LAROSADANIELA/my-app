import React from "react";
import Proyectos from "../proyectos/Proyectos";

export default function Boton1() {
  return (
    <div>
      <button id="botones" onClick={Proyectos}>
        PROYECTOS
      </button>
    </div>
  );
}
