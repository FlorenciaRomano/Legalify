import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Item1 from '../assets/TerminosYcondiciones/Seccion6Item1.png'
import Item2 from '../assets/TerminosYcondiciones/Seccion6Item2.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion6Item3.png'
import Principal from '../assets/TerminosYcondiciones/Seccion6Derecha.png'
import {useMediaQuery} from '@mui/material'

const TermsCS6 = () => {
  const isMobile = useMediaQuery('(max-width: 480px)')

  return (
    <>
      <div className='ContenedorGeneralS6'>
        <div className='ContenedorMedioS6'>
          <div className='legalify-section__content3'>
            <img src={LogoTC} alt='' width={150} />
          </div>

          <section className='Seccion3TC'>
            <div className='itemsS6'>
              <img src={Item1} alt='' />
              <img src={Item2} alt='' />
              <img src={Item3} alt='' />
            </div>
            <div className='itemsP3'>
              <ul>
                <li>No se hace responsable de las pérdidas o daños que puedan producirse si usted incumple la obligación de proporcionar información adecuada.</li>

                <li>No tiene control sobre el tipo o la cantidad de información que se intercambia en nuestra plataforma.</li>

                <li>No se hace responsable del uso que los asesores jurídicos hagan de los datos personales facilitados por los clientes una vez se han conectado a través de nuestra plataforma</li>
              </ul>
              <p>Es su responsabilidad asegurarse de que la información que proporciona es verdadera, completa, precisa y actualizada.</p>

              <p>Si utilizas o compartes datos personales de otros usuarios o de terceros (incluidos menores de edad), debes contar previamente con su consentimiento. Este consentimiento debe ser libre, previo, expreso e inequívoco.</p>

              <p>Si consideras que determinados contenidos de nuestra web vulneran tu privacidad o la de otro tienes la opción de escribirnos a: info@legalify.app</p>
            </div>
          </section>
        </div>

        {isMobile ? null : (
          <div className='PoliticaDePrivacidadS6'>
            <img src={Principal} alt='' />
            <h2>¿QUE INFORMACION RECOPILAMOS?</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default TermsCS6
