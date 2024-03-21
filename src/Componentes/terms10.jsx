import React from 'react'
import Item1 from '../assets/TerminosYcondiciones/section10item1.png'
import Item2 from '../assets/TerminosYcondiciones/section10item2.png'
import Item3 from '../assets/TerminosYcondiciones/section10item3.png'
import Principal from '../assets/TerminosYcondiciones/Seccion11Derecha.png'
import {useMediaQuery} from '@mui/material'

const TermsCS10 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <div className='ContenedorGeneralS3'>
        <div className='ContenedorMedioS3'>
          <section className='Seccion3TC'>
            <div className='itemsS11'>
              <img src={Item1} width={80} alt='' />
              <img src={Item2} width={80} alt='' />
              <img src={Item3} width={80} alt='' />
            </div>
            <div className='itemsP3'>
              <p>La información que nos proporcione será almacenada durante el tiempo que sea necesario, mientras dure su relación con nuestra plataforma o para el fin específico para el que se recopilaron los datos. En algunos casos, es posible que necesitemos conservar sus datos durante un período más largo para cumplir con obligaciones legales. Incluso si cierra su cuenta, podemos conservar información anonimizada o disociada con fines de investigación y desarrollo.</p>

              <p>Tratamos sus datos personales con total confidencialidad. Sólo los miembros autorizados del personal de Legalify que necesiten acceder a la información para los fines descritos anteriormente (artículo 4) la tratarán. Nos comprometemos a mantener la privacidad de sus datos indefinidamente.</p>

              <p>Hemos implantado medidas técnicas y organizativas para evitar la alteración, pérdida, acceso no autorizado o cualquier acción que pueda comprometer la seguridad, confidencialidad y disponibilidad de su información. Nuestras medidas incluyen la identificación y prevención de incidentes, así como la resolución de cualquier problema que surja. Supervisamos regularmente nuestros sistemas para detectar vulnerabilidades y posibles ataques.</p>
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

export default TermsCS10
