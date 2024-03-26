import React from 'react'
import img1 from '../assets/TerminosYcondiciones/Seccion13Item1.png'
import img2 from '../assets/TerminosYcondiciones/Seccion13Item2.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/Seccion12Derecha.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS13 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneralS13'>
        <Box>

          <div className='ContenedorMedio'>
            <section className='Seccion1TC'>
              <div className='itemsP10'>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img1} alt='' width={100} />

                 <p><b>Derecho a la protección contra las decisiones automatizadas:</b> 
                  <br/> Tiene derecho a no ser objeto de decisiones basadas únicamente en un tratamiento 
                       automatizado que le afecten de forma significativa, incluida la elaboración de perfiles.
                       Sin embargo, tenga en cuenta que si usted consintió expresamente dicho tratamiento al
                       aceptar esta política, este derecho puede no ser aplicable.
                  </p>
                  

                  
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img2} alt='' width={100}  />
                  <p><b>Derecho de recurso ante la Autoridad de Protección de Datos Personales de su país:</b> 
                  <br/>Si cree que Legalify está gestionando mal tu información personal, tienes derecho a
                   ponerte en contacto con la autoridad responsable de la protección de datos en tu país.
                    Antes de hacerlo, le recomendamos que comparta con nosotros sus preocupaciones o problemas,
                     escribiendo a:  

                  </p>
                </Box>
               
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidadS13'>
            <img src={PoliticaDePrivacidad} alt='' width={200} />
            <h2>DERECHOS Y OPCIONES  </h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS13
