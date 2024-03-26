import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import img1 from '../assets/TerminosYcondiciones/Seccion9Logo1.png'
import Img2 from '../assets/TerminosYcondiciones/Seccion9Logo2.png'
import Img3 from '../assets/TerminosYcondiciones/Seccion9Logo3.png'
import Campana from '../assets/TerminosYcondiciones/NotificationIcon.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS9 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneral'>
        <Box>

          <div className='ContenedorMedio'>
            <div className='img9'>
              <img src={img1} alt='' width={150} />
              <img src={Img2} alt='' width={150} />
              <img src={Img3} alt='' width={150} />
            </div>

            <section className='Seccion1TC'>
              <div className='itemsP'>
                <p>Nuestros servicios contienen enlaces a otras plataformas. Además, puede utilizar su cuenta
                   preexistente de "Facebook", "Google" o "LinkedIn" para iniciar sesión fácilmente en nuestro 
                   sitio web.</p>
                <Box className='Seccion1TC' display={'flex'}>
                  <Box>    
                  <img src={LogoTC} alt='' />
                  <p> no controla estos sitios web y no es responsable de su contenido, políticas de privacidad,
                     medidas de seguridad, o cómo utilizan su información personal. </p>
                  </Box>

                </Box>
                <Box className='Seccion1TC' display={'flex'}>
                  <img src={Campana} alt=''width={100} /> 
                  <p>Tenga en cuenta que estas plataformas y redes sociales pueden recopilar su información, lo cual está fuera del control de Legalify. Cualquier información que usted les proporcione está sujeta a sus políticas de privacidad, no a las de Legalify.
Por lo tanto, le recomendamos que lea detenidamente las condiciones de uso y las políticas de privacidad 
de dichos terceros.</p>
                </Box>
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad9'>
            <h2>INFORMACIÓN RECOPILADA POR OTRAS PLATAFORMAS Y REDES SOCIALES </h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS9
