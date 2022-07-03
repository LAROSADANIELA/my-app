import React from "react";
import "./Cover.css";
import Boton1 from "../botones/Boton1";
import Boton2 from "../botones/Boton2";

export const Cover = () => {
  return (
    <div className="cover-container">
      <h1>ORGANIZACION LABORAL</h1>
      <h2>mensaje programado</h2>
      <Boton1 />
      <Boton2 />
    </div>
  );
};
export default Cover;
