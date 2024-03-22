import React from 'react';
import '../styles/Index.css';
import Promocion from '../assets/logo-abogacia-az.jpg';
import DisableElevation from './botonPromo';
import { Box } from '@mui/material';

function PromocionAbogados() {
    return (
        <Box sx={{width:{xs:'100vw', md:'100%'},  }} className='sectionPromo'>
            <div className='Promo'>
                <h1>Promoción para matriculados y 
                    matriculadas del 
                    <br />Colegio Público de Abogados de la Capital Federal</h1>
                  
            </div>
            
            <div className='imagenPromo'>
                <img src={Promocion} alt="" srcset="" width={600}/>
            </div>
            
            <div className='listaPromo'>
            <p>MEMBRESÍA DE UN AÑO SIN COSTO EN EL PLAN ESPECIAL PARA MATRICULADOS/AS 
                DEL CPACF.
            </p>
            <p>CON EL ABONO TENDRÁS ACCESO A LA PLATAFORMA 
                OFRECIENDO TUS SERVICIOS LEGALES:
                <li>
                    <ul>
                        En una jurisdicción (CABA)
                    </ul>
                    <ul>
                        Con una especialidad
                    </ul>
                    <ul>
                        Acceso a la agenda de reuniones Legalify y reuniones de emergencia
                    </ul>
                </li>
            </p>
            </div>
           
            <DisableElevation/>
        </Box>

    )
}
export default PromocionAbogados
