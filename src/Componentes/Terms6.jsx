import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Item1 from '../assets/TerminosYcondiciones/Seccion6Item1.png'
import Item2 from '../assets/TerminosYcondiciones/Seccion6Item2.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion6Item3.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/Seccion6Derecha.png'
import { useMediaQuery } from '@mui/material'
import { Box, Container } from '@mui/material'


const TermsCS6 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneralS6'>
        <Box>
          

          <div className='ContenedorMedio'>
            <div className='img1'>
              <img src={LogoTC} alt="" width={100} />
              
            </div>
            <div>
              <ul>
                <li>o se hace responsable de las pérdidas o
                   daños que puedan producirse si usted incumple la obligación de proporcionar información adecuada. </li>
                <li>No tiene control sobre el tipo o la cantidad de información que se intercambia en nuestra plataforma.</li>
                <li>No se hace responsable del uso que los asesores jurídicos hagan de los datos personales facilitados por los 
                  clientes una vez se han conectado a través de nuestra plataforma</li>
              </ul>
            </div>
            <section className='Seccion1TC'>
              <div className='itemsP' >
                <Box className='Seccion1TC' display={'flex'} gap={2}>
                  <img src={Item1} alt='' />
                  <p> Es su responsabilidad asegurarse de que la información que proporciona es verdadera, completa, precisa y actualizada. </p>
                </Box>
                <Box className='Seccion1TC' display={'flex'} gap={2}>
                  <img src={Item2} alt='' width={200} /> 
                  <p>Si utilizas o compartes datos personales de otros usuarios o de terceros (incluidos menores de edad), debes contar previamente 
                    con su consentimiento. Este consentimiento debe ser libre, previo, expreso e inequívoco. </p>
                </Box>
                <Box className='Seccion1TC' display={'flex'} gap={2}>
                  <img src={Item3} alt='' width={200} /> 
                  <p>i consideras que determinados contenidos de nuestra web vulneran tu privacidad o la de otro tienes la opción de escribirnos a: info@legalify.app</p>
                </Box>
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidadS6'>
            <img src={PoliticaDePrivacidad} alt='' width={150} />
            <h2>¿CUÁL ES LA BASE <br /> JURÍDICA QUE JUSTIFICA <br />EL TRATAMIENTO DE SUS DATOS PERSONALES?</h2>
          </div>
        )}
      </div>
    </Container>
  )
}

  
export default TermsCS6
