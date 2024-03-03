import React from 'react';
import '../styles/Index.css';
import Promocion from '../assets/colegio1.webp';

function PromocionAbogados() {
    return (
        <div className='sectionPromo'>
            <div className='Promo'>
                <h1>Promoción para matriculados y 
                    matriculadas del 
                    <br />Colegio Público de Abogados de la Capital Federal</h1>
                  
            </div>
            <div className='imagenPromo'>
                <img src={Promocion} alt="" srcset="" width={600}/>
            </div>
        </div>

    )
}
export default PromocionAbogados
