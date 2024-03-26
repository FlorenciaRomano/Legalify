import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import img1 from '../assets/TerminosYcondiciones/Seccion15Item.png'
import Info from '../assets/TerminosYcondiciones/info.png'
import Candado from '../assets/TerminosYcondiciones/candado.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/Seccion15Derecha.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS15 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneralS15'>
        <Box>
          
          <div className='ContenedorMedioS15'>
            <div className='img1'>
              <img src={img1} alt='' width={200} />
            </div>

            <section className='Seccion1TC'>
              <div className='itemsP'>
              <p><b>Derecho a la protección contra las decisiones automatizadas:</b> 
                  <br/></p>
                  <ul>
                    <li>Libre</li>
                    <li>Expreso</li>
                    <li>Inequívoco e informado.</li>
                  </ul>
                  <p>Esto con la finalidad de tratar sus datos personales de acuerdo con los fines expuestos anteriormente (artículo 4).</p>
                  
               
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad2'>
            <img src={PoliticaDePrivacidad} alt='' width={200} />
            <h2>CONSENTIMIENTO</h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS15
