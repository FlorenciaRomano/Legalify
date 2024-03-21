import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Item1 from '../assets/TerminosYcondiciones/Seccion6Item1.png'
import Item2 from '../assets/TerminosYcondiciones/Seccion6Item2.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion6Item3.png'
import Principal from '../assets/TerminosYcondiciones/Seccion6Derecha.png'
import {Box, useMediaQuery} from '@mui/material'

const TermsCS6 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <div className='ContenedorGeneralS6'>
        <div className='ContenedorMedioS6'>
          <div className='legalify-section__content3'>
            <img src={LogoTC} alt='' width={150} />
          </div>

          <section className='Seccion3TC'>
            <Box className='itemsP3' sx={{width:'90%'}}>
              <ul>
                <Box sx={{display: 'flex', gap:5}}>
                  <img src={Item1} alt='' />
                  <li>No se hace responsable de las pérdidas o daños que puedan producirse si usted incumple la obligación de proporcionar información adecuada.</li>
                </Box>
                <Box sx={{display: 'flex', gap:5}}>
                  <img src={Item2} alt='' /> <li>No tiene control sobre el tipo o la cantidad de información que se intercambia en nuestra plataforma.</li>
                </Box>
                <Box sx={{display: 'flex', gap:5}}>
                  <img src={Item3} alt='' /> <li>No se hace responsable del uso que los asesores jurídicos hagan de los datos personales facilitados por los clientes una vez se han conectado a través de nuestra plataforma</li>
                </Box>
              </ul>
              <p>Es su responsabilidad asegurarse de que la información que proporciona es verdadera, completa, precisa y actualizada.</p>

              <p>Si utilizas o compartes datos personales de otros usuarios o de terceros (incluidos menores de edad), debes contar previamente con su consentimiento. Este consentimiento debe ser libre, previo, expreso e inequívoco.</p>

              <p>Si consideras que determinados contenidos de nuestra web vulneran tu privacidad o la de otro tienes la opción de escribirnos a: info@legalify.app</p>
            </Box>
          </section>
        </div>

        {isMobile ? null : (
          <div className='PoliticaDePrivacidad'>
            <img src={Principal} alt='' />
            <h2>¿QUE INFORMACION RECOPILAMOS?</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default TermsCS6
