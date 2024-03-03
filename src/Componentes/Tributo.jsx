import React from 'react';
import '../styles/Index.css';
import TributoImg from '../assets/afiliados/tributoSimple/TributoSimpleLogo.webp';
import { Button } from "bootstrap";


function Section2() {
    return (
        <div className='sectionTributo'>
            
            <div className='imagenTributo'>
                <img src={TributoImg} alt="" srcset="" width={150}/>
            </div>
            <div className='sectionTributo2'>
                <h1>Tributo Simple y Legalify.</h1>

                <p>Tributo Simple es una App que facilita a los pequeños contribuyentes de 
                    LATAM llevar su administración y contabilidad de forma sencilla, segura y 
                    accesible. Se descarga de forma gratuita y cuenta con servicios gratis, como 
                    la facturación, y pagos, como las declaraciones juradas.</p>

                    <div className='botonPromo'>
                    <a className="ActionPromo" href="https://tributosimple.com/legalify/" src={Button}>Ir a Promoción</a>
                   
                </div>
               
                  
            </div>
          
        </div>

    )
}
export default Section2


