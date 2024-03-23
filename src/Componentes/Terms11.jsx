import React from 'react'
import Item1 from '../assets/TerminosYcondiciones/Seccion11Item1.png'
import Item2 from '../assets/TerminosYcondiciones/Seccion11Item2.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion11Item3.png'
import Principal from '../assets/TerminosYcondiciones/Seccion11Derecha.png'
import {useMediaQuery} from '@mui/material'

const TermsCS11 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <div className='ContenedorGeneralS11'>
        <div className='ContenedorMedioS11'>
          <section className='Seccion3TC'>
            <div className='itemsS11'>
              <img src={Item1} alt='' />
              <img src={Item2} alt='' />
              <img src={Item3} alt='' />
            </div>
            <div className='itemsP3'>
              <p>Si descubrimos una violación de la seguridad que pueda afectar gravemente a sus derechos y libertades, le informaremos con prontitud en un lenguaje claro y sencillo. Queremos asegurarnos de que comprende la naturaleza de la violación y sus posibles consecuencias para su información personal.</p>

              <p>En algunos casos no le notificaremos directamente: cuando ya hayamos aplicado medidas de protección sólidas, como el cifrado, que hacen que los datos sean ilegibles para personas no autorizadas. También puede ser cuando notificar a cada usuario afectado requiera un esfuerzo excesivo por nuestra parte. En tales situaciones, podemos optar por métodos de comunicación alternativos o hacer anuncios públicos para abordar la cuestión.</p>

              <p>En las situaciones ya mencionadas, optaremos por métodos de comunicación alternativos o hacer anuncios públicos para abordar la cuestión.</p>
            </div>
          </section>
        </div>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad'>
            <img src={Principal} alt='' />
            <h2>CONSERVACIÓN, CONFINDENCIALIDAD Y SEGURIDAD DE LOS DATOS </h2>
          </div>
        )}
      </div>
    </>
  )
}

export default TermsCS11
