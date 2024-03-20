import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import img1 from '../assets/TerminosYcondiciones/ImagenS2.png'
import Info from '../assets/TerminosYcondiciones/info.png'
import Candado from '../assets/TerminosYcondiciones/candado.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/PoliticaDePrivacidad.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS2 = () => {
  const isMobile = useMediaQuery('(max-width: 480px)')

  return (
    <Container container sx={{ height: '100vh' }}>
      <div className='ContenedorGeneral'>


        <div className='legalify-section__content'>
          <h4 className='legalify-section__title'>¡Bienvenido a Legalify!</h4>
          <img src={LogoTC} alt='' width={100} />

        </div>


        <div className='ContenedorMedio'>
          <div className='img1'>
            <img src={img1} alt='' width={200} />
          </div>

          <section className='Seccion1TC'>
            <div className='itemsP'>
              <p>Es una plataforma digital que pone en contacto a personas que necesitan asesoramiento jurídico (los "clientes") con abogados especializados que pueden proporcionar dicho asesoramiento (los "asesores jurídicos").</p>
              <Box className='Seccion1TC' display={'flex'}>
                <img src={Info} alt='' />
                <p> Para prestar adecuadamente este servicio, necesitamos recabar información personal de nuestros clientes y asesores jurídicos (los "usuarios").</p>
              </Box>
              <Box className='Seccion1TC' display={'flex'}>
                <img src={Candado} alt='' /> <p>Nos preocupamos por la privacidad y seguridad de su información. Por eso hemos creado esta política de privacidad (la "política"). En ella se explica de forma transparente y comprensible qué información recogemos, cómo la recogemos y por qué la recogemos. Esta política sigue todas las leyes aplicables, incluido el Reglamento General Europeo de Protección de Datos (RGPD).</p>
              </Box>
            </div>
          </section>

         
        </div>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad'>
            <img src={PoliticaDePrivacidad} alt='' />
            <h2>POLITICA DE PRIVACIDAD</h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS2
