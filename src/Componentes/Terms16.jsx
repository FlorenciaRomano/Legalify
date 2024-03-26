import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import img1 from '../assets/TerminosYcondiciones/ImagenS2.png'
import Item1 from '../assets/TerminosYcondiciones/Seccion16Item1.png'
import Item2 from '../assets/TerminosYcondiciones/Seccion16Item2.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/Seccion16Derecha.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS16 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneralS16'>
        <Box>
          <section className='legalify-section'>
            <div className='legalify-section__content16'>
              <img src={LogoTC} alt='' width={150} />
            </div>
          </section>

          <div className='ContenedorMedio'>
           

            <section className='Seccion16TC'>
              <div className='itemsP16'>
                <p>Podrá modificar esta política para adaptarla a nuevas leyes o normativas, a nuestras propias 
                  políticas o a peticiones de las autoridades de protección de datos. </p>
                <Box className='Seccion16TC' display={'flex'}>
                  <img src={Item1} alt='' />
                  <p> En el supuesto de modificación, publicaremos la política actualizada en nuestro sitio web y 
                    le pediremos su consentimiento antes de recopilar más información personal. </p>
                </Box>
                <Box className='Seccion16TC' display={'flex'}>
                  <img src={Item2} alt='' /> 
                  <p>Si usted no está de acuerdo con la nueva política y tiene razones válidas para no seguir permitiendo 
                    el tratamiento de su información personal, puede solicitar a Legalify que elimine su información, 
                    tal y como se describe en el artículo 8.1 anterior.</p>
                </Box>
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad16'>
            <img src={PoliticaDePrivacidad} alt='' width={200} />
            <h2>CAMBIOS EN ESTA POLITICA DE PRIVACIDAD </h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS16
