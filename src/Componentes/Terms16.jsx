import React from 'react'
import Logo from '../assets/logo_legalify_azul_transparente.png'
import Item2 from '../assets/TerminosYcondiciones/Seccion16Item1.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion16Item2.png'
import Principal from '../assets/TerminosYcondiciones/Seccion16Derecha.png'
import {useMediaQuery} from '@mui/material'

const TermsCS16 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <div className='ContenedorGeneralS16'>
        <div className='ContenedorMedioS16'>
          <section className='Seccion3TC'>
            <div className='itemsS16'>
              <img src={Item2} alt='' />
              <img src={Item3} alt='' />
            </div>
            <div className='itemsP3'>
              <span className='FilaUnoS16'>
                <img src={Logo} alt='' width={150} />
                <p>Podrá modificar esta política para adaptarla a nuevas leyes o normativas, a nuestras propias políticas o a peticiones de las autoridades de protección de datos.</p>
              </span>

              <p>En el supuesto de modificación, publicaremos la política actualizada en nuestro sitio web y le pediremos su consentimiento antes de recopilar más información personal.</p>

              <p>Si usted no está de acuerdo con la nueva política y tiene razones válidas para no seguir permitiendo el tratamiento de su información personal, puede solicitar a Legalify que elimine su información, tal y como se describe en el artículo 8.1 anterior.</p>
            </div>
          </section>
        </div>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad16'>
            <img src={Principal} alt='' />
            <h2>CAMBIOS EN ESTA POLITICA DE PRIVACIDAD </h2>
          </div>
        )}
      </div>
    </>
  )
}

export default TermsCS16
