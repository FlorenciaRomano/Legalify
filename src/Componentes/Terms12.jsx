import React from 'react'
import img1 from '../assets/TerminosYcondiciones/Seccion12Item1.png'
import img2 from '../assets/TerminosYcondiciones/SeccionItem2.png'
import img3 from '../assets/TerminosYcondiciones/Seccion12Item3.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/Seccion12Derecha.png'
import { Box, Container, useMediaQuery } from '@mui/material'

const TermsCS12 = () => {
  const isMobile = useMediaQuery('(max-width: 1134px)')

  return (
    <Container container>
      <div className='ContenedorGeneralS12'>
        <Box>

          <div className='ContenedorMedio'>
            <section className='Seccion1TC'>
              <div className='itemsP10'>

              
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img1} alt='' width={100} />
                  <Box>
                 <b> <p>Derecho a controlar sus datos personales:</p></b>
               
                  <ul>
                    <li>Acceso: Solicitar el acceso a su información que almacena Legalify. </li>
                    <li>Rectificación: Si encuentra algún dato incorrecto o incompleto, puede pedirnos que lo corrijamos.</li>
                    <li>Cancelación: Puede solicitar la eliminación de sus datos de nuestra base de datos. </li>
                    <li>Oposición: Si sus datos están siendo utilizados para un fin no mencionado en este documento, puede oponerse a su uso.</li>
                  </ul>
                  </Box>
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img2} alt='' width={100} />
                  
                  <p> <b>  Derecho a la portabilidad de sus datos personales:</b> <br />
                     Tiene derecho a solicitar la devolución de sus datos personales a Legalify
                    o pedirnos que los transfiramos a otra empresa.</p>
                </Box>
                <Box className='Seccion10TC' display={'flex'}>
                  <img src={img3} alt='' width={100} />
                  <Box>
                  <p> 
                    <b>
                    Derecho a limitar el tratamiento de sus datos personales:
                    </b>
                  </p>
                  <ul>
                    <li>Si cree que su información personal es inexacta y ha solicitado su verificación.</li>
                    <li>Si el tratamiento de su información es ilegal y usted se ha opuesto a su eliminación, 
                      solicitando en su lugar que limitemos su uso.</li>
                    <li>Si Legalify ya no necesita su información para fines de procesamiento, pero usted 
                      la necesita para ejercer o defender reclamaciones legales.</li>
                    <li>Si usted se ha opuesto al tratamiento de su información personal basándose en el artículo 21,
                       apartado 1, del GDPR. Verificaremos si nuestras razones para procesar sus datos prevalecen sobre 
                       sus objeciones.</li>
                  </ul>
                  </Box>
                </Box>
              </div>
            </section>
          </div>
        </Box>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad2'>
            <img src={PoliticaDePrivacidad} alt='' width={200} />
            <h2>DERECHOS Y OPCIONES </h2>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TermsCS12
