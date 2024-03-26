import React from 'react'

import img1 from '../assets/TerminosYcondiciones/Seccion17Derecha.png'

import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS17 = () => {
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
            
                  <p>Si tiene alguna pregunta sobre esta Política, escríbanos a la siguiente dirección de correo electrónico: info@legalify.app </p>
                  
               
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad2'>
      
            <h2>CONTACTO</h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS17
