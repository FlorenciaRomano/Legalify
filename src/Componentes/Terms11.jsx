import React from 'react'
import img1 from '../assets/TerminosYcondiciones/Seccion11Item1.png'
import img2 from '../assets/TerminosYcondiciones/Seccion11Item2.png'
import img3 from '../assets/TerminosYcondiciones/Seccion11Item3.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/section10Derecha.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS11 = () => {
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
                  <p>Si descubrimos una violación de la seguridad que pueda afectar gravemente a
                     sus derechos y libertades, le informaremos con prontitud en un lenguaje claro 
                     y sencillo. Queremos asegurarnos de que comprende la naturaleza de la violación 
                     y sus posibles consecuencias para su información personal.

                  </p>
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img2} alt='' width={100}  />
                  <p>En algunos casos no le notificaremos directamente: cuando ya hayamos aplicado medidas de protección sólidas, 
                    como el cifrado, que hacen que los datos sean ilegibles para personas no autorizadas. También puede ser
                     cuando notificar a cada usuario afectado requiera un esfuerzo excesivo por nuestra parte. 
                     En tales situaciones, podemos optar por métodos de comunicación alternativos o hacer anuncios 
                     públicos para abordar la cuestión.</p>
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img3} alt='' width={100}  />
                  <p>En las situaciones ya mencionadas, optaremos por métodos de comunicación alternativos o hacer 
                    anuncios públicos para abordar la cuestión.</p>
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

export default TermsCS11
