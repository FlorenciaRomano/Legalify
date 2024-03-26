import React from 'react'
import img1 from '../assets/TerminosYcondiciones/Seccion11Item2.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/Seccion13Derecha.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS14 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneralS14'>
        <Box sx={{width:'197%'}}>

          <div className='ContenedorMedioS14'>
            <section className='Seccion1TC'>
              <div className='itemsP10'>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img1} alt='' width={100} />
                  <p> No podremos ofrecerle los servicios prestados en nuestro sitio web.
                  </p>
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img1} alt='' width={100}  />
                  <p>
                  No podrá utilizar nuestro sitio web ni acceder a sus funciones.</p>
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img1} alt='' width={100}  />
                  <p>No podremos responder a sus preguntas, preocupaciones o quejas.</p>
                </Box>
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad14'>
            <img src={PoliticaDePrivacidad} alt='' width={200} />
            <h2>¿QUÉ CONSECUENCIAS TIENE NEGARNOS EL ACCESO A SUS DATOS PERSONALES?</h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS14
