import React from "react";
import Boton from "./Boton";

const Tarjeta = (props) => {
  console.log(props);
  return (
    <div className="product">
      <img src={props.img} />
      <h2 className="header">{props.nombreDelProducto}</h2>
      <p className="description">{props.descripcion}</p>
      <p className="price">{props.precio}</p>
      <Boton />
      <div className="quickview">Quickview</div>
    </div>
  );
};

export default Tarjeta;