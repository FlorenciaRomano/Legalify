import React, { useEffect, useState } from "react";
import "../styles/Index.css";
import Escena1 from "../assets/scenes01.svg";
import Escena2 from "../assets/scenes02.svg";
import Escena3 from "../assets/scenes03.svg";
import Escena4 from "../assets/scenes04.svg";
import Escena5 from "../assets/scenes05.svg";
import Escena6 from "../assets/scenes06.svg";
import Escena7 from "../assets/scenes08.svg";
import { Button } from "bootstrap";

function Section1() {
  const [changedImage, setchangedImage] = useState(Escena1);
  const [indice, setIndice] = useState(0)

  const elementos = [
    Escena1,
    Escena2,
    Escena3,
    Escena4,
    Escena5,
    Escena6,
    Escena7,
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((indice + 1) % elementos.length); // ESto va a recorrer el array, por cada uno de ellos.
      setchangedImage(elementos[indice]); // Este es el que va a colocar la imagen. 
    }, 3000);
    return () => clearInterval(intervalo); // Esto no tengo la menor idea de que hace XDDDD
  }, [indice]);

  return (
    <div className="sectionPrin">
      <div className="section1">
        <h1>¿Necesitas un abogado?</h1>

        <p>En Legalify te ayudamos a encontrarlo</p>
        <p>
          ¿Necesitas financiar los honorarios? ¡Tenemos la solución para ti! Haz
          clic en el botón a continuación para obtener más información.
        </p>

        <div className="botonesS1">
          <a
            className="registrarse"
            href="https://login.legalify.app/redes?rol=2"
            src={Button}
          >
            Registrarse
          </a>
          <a
            className="financiar"
            href="https://login.legalify.app/redes?rol=2"
            src={Button}
          >
            Financiar
          </a>
        </div>
      </div>
      <div className="imagenUno">
        <img src={changedImage} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Section1;

