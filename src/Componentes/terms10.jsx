import React from 'react'
import img1 from '../assets/TerminosYcondiciones/section10item1.png'
import img2 from '../assets/TerminosYcondiciones/section10item2.png'
import img3 from '../assets/TerminosYcondiciones/section10item3.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/section10Derecha.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS10 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneral'>
        <Box>

          <div className='ContenedorMedio'>
            <section className='Seccion1TC'>
              <div className='itemsP10'>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img1} alt='' width={100} />
                  <p>La información que nos proporcione será almacenada durante el
                    tiempo que sea necesario, mientras dure su relación con nuestra
                    plataforma o para el fin específico para el que se recopilaron los datos.
                    En algunos casos, es posible que necesitemos conservar sus datos durante un
                    período más largo para cumplir con obligaciones legales. Incluso si cierra su cuenta,
                    podemos conservar información anonimizada o disociada con fines de investigación y
                    desarrollo.
                  </p>
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img2} alt='' width={100}  />
                  <p>
                    Tratamos sus datos personales con total confidencialidad. Sólo los miembros autorizados del personal de
                    Legalify que necesiten acceder a la información para los fines descritos anteriormente (artículo 4) la tratarán.
                    Nos comprometemos a mantener la privacidad de sus datos indefinidamente.</p>
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img3} alt='' width={100}  />
                  <p>Hemos implantado medidas técnicas y organizativas para evitar la alteración, pérdida, acceso no autorizado o cualquier
                    acción que pueda comprometer la seguridad, confidencialidad y disponibilidad de su información.
                    Nuestras medidas incluyen la identificación y prevención de incidentes, así como la resolución de cualquier
                    problema que surja. Supervisamos regularmente nuestros sistemas para detectar vulnerabilidades y posibles ataques.</p>
                </Box>
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad2'>
            <img src={PoliticaDePrivacidad} alt='' width={200} />
            <h2>CONSERVACIÓN, CONFINDENCIALIDAD Y SEGURIDAD DE LOS DATOS </h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS10
