import React from 'react';
import '../styles/Index.css';
import Escena1 from '../assets/scenes01.svg';
import { Button } from "bootstrap";


function Section1() {
    return (
        <div className='sectionPrin'>
            <div className='section1'>
                <h1>¿Necesitas un abogado?</h1>

                <p>En Legalify te ayudamos a encontrarlo</p>
                <p>¿Necesitas financiar los honorarios? ¡Tenemos la solución para ti! Haz clic en el
                    botón a continuación para obtener más información.</p>
                  
                  <div className='botonesS1'>
                    <a className="registrarse" href="https://login.legalify.app/redes?rol=2" src={Button}>Registrarse</a>
                    <a className="financiar" href="https://login.legalify.app/redes?rol=2" src={Button}>Financiar</a>
                </div>
            </div>
            <div className='imagenUno'>
                <img src={Escena1} alt="" srcset="" />
            </div>
        </div>

    )
}
export default Section1


