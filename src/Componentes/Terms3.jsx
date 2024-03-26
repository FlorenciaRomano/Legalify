import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Info from '../assets/TerminosYcondiciones/Seccion3Item1.png'
import Candado from '../assets/TerminosYcondiciones/Seccion3Item2.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion3Item3.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/Seccion3Derecha.png'
import { useMediaQuery } from '@mui/material'
import { Box, Container } from '@mui/material'


const TermsCS3 = () => {
  const isMobile = useMediaQuery('(max-width: 1200px)')

  return (
    <Container container>
      <div className='ContenedorGeneralS3'>
        <Box>
          

          <div className='ContenedorMedio'>
            <div className='img1'>
            <img src={LogoTC} alt='' width={100} />
              <p>Recoge información personal de usted, el usuario, en tres momentos: </p>
            </div>

            <section className='Seccion1TC'>
              <div className='itemsP' >
                <Box className='Seccion1TC' display={'flex'} gap={2}>
                  <img src={Info} alt='' />
                  <p> Al momento del registro en la plataforma, se recoje información de: Clientes y asesores jurídicos.  </p>
                </Box>
                <Box className='Seccion1TC' display={'flex'} gap={2}>
                  <img src={Candado} alt='' /> <p>Despues del registro,también se recoje información de: Clientes y asesores juridicos. </p>
                </Box>
                <Box className='Seccion1TC' display={'flex'} gap={2}>
                  <img src={Item3} alt='' /> 
                  <Box>
                   <p>Finalmente, también se recopila información personal que usted nos proporciona voluntariamente 
                    cuando se pone en contacto con nosotros a través de:</p>
                    <ul>
                      <li>correo electrónico</li>
                      <li>a través de la herramienta Whatsapp de nuestra plataforma</li>
                    </ul>
                    </Box>
                    </Box>
                 
               
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad3'>
            <img src={PoliticaDePrivacidad} alt='' width={200}  />
            <h2>POLITICA DE PRIVACIDAD</h2>
          </div>
        )}
      </div>
    </Container>
  )
}

  
export default TermsCS3
