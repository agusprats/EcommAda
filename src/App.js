import React, { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";


export default function App() {
  const [clics, setClics] = useState(0);

  const productosInfo = [
    {
      img: "https://placeimg.com/300/100",
      nombre: "Nombre 1",
      descripcion: `Las descripciones de producto son textos que explican las características y características de los productos.`,
      precio: 299,
      categoria: "Descuentos"
    },
    {
      img: "https://placeimg.com/200/100",
      nombre: "Nombre 2",
      descripcion: `Por regla general, las descripciones de producto se utilizan en las tiendas online con el objetivo de informar a los clientes potenciales y fomentar su intención de compra.`,
      precio: 399
    },
    {
      img: "https://placeimg.com/400/100",
      nombre: "Nombre 3",
      descripcion: `Explica de forma clara y directa las ventajas del producto.`,
      precio: 499
    },
    {
      img: "https://placeimg.com/500/100",
      nombre: "Nombre 4",
      descripcion: `Detalla para qué sirve el producto y cómo lo puede utilizar.`,
      precio: 599
    },
    {
      img: "https://placeimg.com/600/100",
      nombre: "Nombre 6",
      descripcion: `Realiza preguntas y respóndelas en la misma descripción. Tienes que plantear problemas y responder con soluciones`,
      precio: 699
    },
    {
      img: "https://placeimg.com/700/100",
      nombre: "Nombre 7",
      descripcion: `Escribe al menos 2 párrafos con palabras clave sobre tus productos para mejorar el posicionamiento`,
      precio: 799
    },
    {
      img: "https://placeimg.com/800/100",
      nombre: "Nombre 8",
      descripcion: `Utiliza bien las etiquetas o tags y las categorías`,
      precio: 899
    },
    {
      img: "https://placeimg.com/900/100",
      nombre: "Nombre 9",
      descripcion: `Cita siempre ejemplos reales (si son de famosos o alguien conocido mejor que mejor).`,
      precio: 999
    },
    {
      img: "https://placeimg.com/700/100",
      nombre: "Nombre 10",
      descripcion: `Utiliza contenido original. NUNCA copies y pegues de otra web. Otras descripciones te pueden ayudar o inspirarte, pero si copias el contenido serás penalizado en el posicionamiento`,
      precio: 1099
    },
    {
      img: "https://placeimg.com/200/100",
      nombre: "Nombre 11",
      descripcion: `Utiliza negritas y cursivas para destacar palabras importantes (marcas, ventajas, nombre del producto...)`,
      precio: 1199
    },
    {
      img: "https://placeimg.com/500/100",
      nombre: "Nombre 12",
      descripcion: `Alguna vez puedes poner enlaces externos a páginas que sean interesantes a tus lectores`,
      precio: 1299
    },
    {
      img: "https://placeimg.com/400/100",
      nombre: "Nombre 13",
      descripcion: `Pon enlaces a otro de tus productos, a algún artículo de tu blog o algún producto que complemente el que estás escribiendo`,
      precio: 1399
    }
  ];

  const contarClicks = () => {
    setClics(clics + 1);
    console.log(clics);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>Webshop</li>
          <li>Contact</li>

          <button onClick={contarClicks}>Clic aqui</button>
          <div>{clics}</div>
        </ul>
      </nav>

      <div className="container">
        {productosInfo.map((producto) => {
          return (
            <Tarjeta
              nombreDelProducto={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              img={producto.img}
            />
          );
        })}
      </div>
    </div>
  );
}

