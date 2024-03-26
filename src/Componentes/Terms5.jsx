import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Info from '../assets/TerminosYcondiciones/Seccion5Item1.png'
import Candado from '../assets/TerminosYcondiciones/LegalifyLogo.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion3Item3.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/Seccion5Derecha.png'
import { useMediaQuery } from '@mui/material'
import { Box, Container } from '@mui/material'


const TermsCS5 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneralS5'>
        <Box>
          

          <div className='ContenedorMedio'>
            <div className='img1'>
            
              <p>Recogemos y tratamos sus datos personales basándonos en: </p>
            </div>

            <section className='Seccion1TC'>
              <div className='itemsP' >
                <Box className='Seccion1TC' display={'flex'} gap={2}>
                  <img src={Info} alt='' />
                  <p> En el consentimiento de los clientes.  </p>
                </Box>
                <Box className='Seccion1TC' display={'flex'} gap={2}>
                  <img src={Candado} alt='' width={200} /> 
                  <p>Los intereses legítimos de Legalify, que no prevalecen sobre sus derechos de privacidad. </p>
                </Box>
               
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidadS5'>
            <img src={PoliticaDePrivacidad} alt='' width={150} />
            <h2>¿CUÁL ES LA BASE <br /> JURÍDICA QUE JUSTIFICA <br />EL TRATAMIENTO DE SUS DATOS PERSONALES?</h2>
          </div>
        )}
      </div>
    </Container>
  )
}

  
export default TermsCS5
